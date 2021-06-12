import React, {Component} from 'react'; 
import {styles} from '../src/Styles';
import {Header} from '../src/components/Header';

import {
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export class AboutUs extends Component { 
  render () {
      return(
        <View style={styles.container}> 
            <Header/>
            <View style={styles.flatlistContainer}>
            <ScrollView>
            <View style={styles.card}>
          {/* <Image style={styles.cardImage} source={{uri: require('@img/')}}></Image> */}
            <Text style={styles.principalText}> Candela Flores </Text>
            <Text style={styles.secondaryText}>cflores@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}>Jujuy, Argentina (21)</Text>
            </View>

            <View style={styles.card}>
          {/* <Image style={styles.cardImage} source={{uri: require('@img/')}}></Image> */}
            <Text style={styles.principalText}> Sofia Mollon </Text>
            <Text style={styles.secondaryText}>smollon@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Buenos Aires, Argentina (21)</Text>
            </View>

            <View style={styles.card}>
          {/* <Image style={styles.cardImage} source={{uri: require('@img/')}}></Image> */}
            <Text style={styles.principalText}> Milagros Scipioni</Text>
            <Text style={styles.secondaryText}> mscipioni@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Misiones, Argentina (21)</Text>
            </View>
            </ScrollView>
            </View>
        </View>

      )
   }
}

export default AboutUs;