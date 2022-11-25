import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import Styles from './Styles';

import { SafeAreaProvider } from 'react-native-safe-area-context';
const image = {url:"https://wallup.net/wp-content/uploads/2019/09/126192-river-autumn-nature-748x468.jpg"};
const DetailScreen = ({navigation, route}) => {
  return(
   <SafeAreaProvider>
      <ScrollView style={Styles.sectionBg}>
          <View key={route.key}>
          <ImageBackground source={image} resizeMode="cover" style={{flex:1,justifyContent:"center"}}>
            <Text></Text>
            <Text style={Styles.heading}>{route.params.params.item}</Text>
          </ImageBackground>
          <Text></Text><Text></Text>
          <Text style={Styles.overview}>{route.params.params.description}
            </Text>

{/*          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>*/}


 
       </View>
    </ScrollView>
    </SafeAreaProvider>
  )
}

export default DetailScreen;