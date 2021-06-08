import React, {Component} from 'react'; 
import {
  Text, 
  View, 
  Image
} from 'react-native';
import {styles} from '../src/Styles'

export class Home extends Component { 
  render () {
      return(
        <View style={styles.container}> 
        <View style={styles.navbar}>
              <Text style={styles.navbarDetails}>Home
              <Image style= {styles.imgNavbar} source= {require('@img/icono_buscador.png')}></Image>
              <Image style= {styles.imgNavbar} source= {require('@img/icono_papelera.png')}></Image>
              </Text>
        </View>

     
    </View>
      )
   }
}
