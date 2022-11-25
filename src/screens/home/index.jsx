import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Platform, Alert,TouchableOpacity
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import CITY_LIST from '../../data/city.json';
import ENDPOINT_LIST from '../../data/endpoint.json';
import { COLORS, SIZES } from '../../constants/theme';
import { baseUrl, apiKey } from '../../constants/api';
import Pannel from '../../components/pannel';

const HomeScreen = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CITY_LIST);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [datas, setDatas] = useState(ENDPOINT_LIST);
  const [data, setData] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    setData();
    const cityData = items.filter((val) => val.city === value);
    if (cityData.length > 0) {
      setLat(cityData[0].lat);
      setLng(cityData[0].lng);
    }
  }, [value]);

  const arr = []
  useEffect(() => {
    const apiCalling = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/${lat}`,
        );
        const json = await response.json();
        setData(json.data.header);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };
    if (lat) {
      apiCalling(lat);
    }
  }, [lat]);
  
  // arr.push(data[0])
 
  // for (var key in dict) {
  //     if (dict.hasOwnProperty(key)) {
  //         arr.push( [ key, dict[key] ] );
  //     }
  // }
  return (
    <View>
      <View style={styles.header}>
        
        <Text style={styles.appName}></Text>
        <View style={{
          minHeight: open && Platform.OS === 'android' ? 90 : 0,
        }}
        >
          <DropDownPicker
            open={open}
            // searchable
            searchPlaceholder="Type to get the Title"
            searchTextInputStyle={{
              borderWidth: 0,
              fontWeight: '700',
            }}
            searchContainerStyle={{
              paddingVertical: 15,
              borderBottomColor: COLORS.accent,
            }}
            placeholder="Select a Covenant"
            placeholderStyle={{
              color: COLORS.darkGrey,
            }}
            containerStyle={{
              margin: 15,
              width: SIZES.width - 30,
            }}
            labelStyle={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: SIZES.h3,
            }}
            listItemLabelStyle={{
              color: COLORS.primary,
              fontWeight: '700',
            }}
            showTickIcon={false}
            dropDownContainerStyle={{
              borderColor: COLORS.primary,
            }}
            ArrowUpIconComponent={() => <Icon name="chevron-up-sharp" size={20} color={COLORS.accent} />}
            ArrowDownIconComponent={() => <Icon name="chevron-down-sharp" size={20} color={COLORS.accent} />}
            value={value}
            items={items.map(({ city }) => ({
              label: city,
              value: city,
            }))}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
     

        </View>
      </View>

      {
                data ? (
                  <FlatList
                    // style={{backgroundColor:"#003460"}}
                    data={data}
                    renderItem={({ item, index}) => (
                      <View>
                        <Pannel data={item} />
                      </View>
                    )}
                  />
                ) : (
                  <View style={styles.noData}>
                    <Text style={styles.noDataTxt}>
                      {!value ? ' - Select Covenant - ' 
                      
                      :
                       'Covenant loading...'
                      }
                    
                    </Text>
                  </View>
                )
            }
    </View>
  );
};

export default HomeScreen;
