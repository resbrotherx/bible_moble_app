/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Pannel = (props) => {
  const { data } = props;
  const navigation = useNavigation();
  const [airQuality, setAirQuality] = useState();


  const [itemcon, setitemcon] = useState();
  const [collapse, setCollapse] = useState(false);
  // for(var i =0; i< State.length;i++){
  //   console.log(State[i])
  // }
  // console.log('lets display',data[1])
  // function display(){
  //   return data.map((item) => {
  //     return(
  //         {item,id}
  //     );
  //   });
  // } 
    // arr.push(data[0])
 
  // for (var key in dict) {
  //     if (dict.hasOwnProperty(key)) {
  //         arr.push( [ key, dict[key] ] );
  //     }
  // }
  // for(var i=0;i< data.Content.length;i++){
  //   setitemcon(data.Content[i])
  // }
 
  const items = data.Content

  const list = []

  items.forEach((item)=>{
    list.push(<TouchableOpacity onPress={() => navigation.navigate('detail', {params: item})}>
                  
                  <View style={styles.row}>
                    <View style={styles.txtRow}>
                      <Text style={styles.subtitle}>{item.item}</Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                </TouchableOpacity>)
  })
  
  return (
    <View>
      <TouchableOpacity onPress={() => {
        setCollapse(!collapse);
      }}
      >
        <View style={styles.row}>
          <View>

            <Text></Text>
            <Text style={styles.index}>
              {' '}
              {data.subcategory}
              {' '}
              
            </Text>
          </View>
          <Icon name={!collapse ? 'chevron-down-sharp' : 'chevron-up-sharp'} size={25} color={COLORS.blue} />
        </View>
      </TouchableOpacity>
      {
                collapse && (
                <View>
                  
                  {list}

                </View>
                )
            }
    </View>
  );
};

export default Pannel;
