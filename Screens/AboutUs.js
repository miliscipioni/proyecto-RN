import React, {Component} from 'react'; 
import {styles} from '../src/Styles';
import {Header} from '../src/components/Header';

import {
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  Animated,
  Pressable
} from 'react-native';

export class AboutUs extends Component { 

  fadeAnimation = new Animated.Value(1)

  fadeIn = ()=>{
    Animated.timing(this.fadeAnimation,{
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start()
  }

  fadeOut = ()=>{
    Animated.timing(this.fadeAnimation,{
      toValue: 0,
      duration: 1500,
      useNativeDriver: false
    }).start()
  }

  render () {
      return(
        <View style={styles.container}> 
            <Text style={styles.navbarDetails}> About Us</Text>
            <View style={styles.flatlistContainer}>

            <TouchableOpacity style={styles.containerbtnAgregarTarjetas} onPress= {this.fadeIn}>
                <Text style={styles.btnAgregarTarjetas} >
                  FADE IN 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerbtnAgregarTarjetas} onPress= {this.fadeOut}>
                <Text style={styles.btnAgregarTarjetas} >
                  FADE OUT
                </Text>
            </TouchableOpacity>

            <ScrollView>
            <Animated.View style={{backgroundColor: '#ffffff', borderRadius: 10, opacity: this.fadeAnimation, width: 300, height: 280, margin: 10, position: 'relative'}}>
            {/* <Image style={styles.cardImage} source={{uri: require('@img/')}}></Image> */}
            <Text style={styles.principalText}> Candela Flores </Text>
            <Text style={styles.secondaryText}>cflores@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}>Jujuy, Argentina (21 años)</Text>
            </Animated.View>

            <Animated.View style={{backgroundColor: '#ffffff', borderRadius: 10, opacity: this.fadeAnimation, width: 300, height: 280, margin: 10, position: 'relative'}}>
          <Image style={styles.cardImage} source={{uri: "https://cdn.dribbble.com/users/331265/screenshots/2542587/gabi-d.gif"}}></Image>
            <Text style={styles.principalText}> Sofia Mollón </Text>
            <Text style={styles.secondaryText}>smollon@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Buenos Aires, Argentina (21 años)</Text>
            </Animated.View>

            <Animated.View style={{backgroundColor: '#ffffff', borderRadius: 10, opacity: this.fadeAnimation, width: 300, height: 280, margin: 10, position: 'relative'}}>
           <Image style={styles.cardImage} source={{uri: 'https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif'}}></Image> 
            <Text style={styles.principalText}> Milagros Scipioni</Text>
            <Text style={styles.secondaryText}> mscipioni@udesa.edu.ar</Text>
            <Text style={styles.secondaryText}> Misiones, Argentina (21 años)</Text>
            </Animated.View>
            </ScrollView>
            </View>
        </View>

      )
   }
}

export default AboutUs;