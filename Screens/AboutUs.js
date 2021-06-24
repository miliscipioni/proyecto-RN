import React, {Component} from 'react'; 
import {styles} from '../src/Styles';
import {Header} from '../src/components/Header';

import {
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export class AboutUs extends Component { 
  render () {
      return(
        <View style={styles.container}> 

        <Header
        openDrawer = {this.props.navigation.openDrawer}
        />

            <Text style={styles.navbarDetailsAboutUs}> About Us</Text>
            
            <View style={styles.flatlistContainer}>
            <ScrollView>
            <View style={styles.cardAboutUs}>
          {/* <Image style={styles.cardImage} source={{uri: require('@img/')}}></Image> */}
            <Text style={styles.principalText}> Candela Flores </Text>
            <Text style={styles.secondaryText}>cflores@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}>Jujuy, Argentina (21 años)</Text>
            </View>

            <View style={styles.cardAboutUs}>
          <Image style={styles.cardImage} source={{uri: "https://cdn.dribbble.com/users/331265/screenshots/2542587/gabi-d.gif"}}></Image>
            <Text style={styles.principalText}> Sofia Mollón </Text>
            <Text style={styles.secondaryText}>smollon@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Buenos Aires, Argentina (21 años)</Text>
            </View>

            <View style={styles.cardAboutUs}>
           <Image style={styles.cardImage} source={{uri: 'https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif'}}></Image> 
            <Text style={styles.principalText}> Milagros Scipioni</Text>
            <Text style={styles.secondaryText}> mscipioni@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Misiones, Argentina (21 años)</Text>
            </View>
            </ScrollView>
            </View>
        </View>

      )
   }
}

export default AboutUs;