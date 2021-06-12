import React, {Component} from 'react'; 
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Styles';

export class Header extends Component {
    render() {
        return (
            <View style={styles.navbar}>
              <Text style={styles.navbarDetails}>Home
              <Image style= {styles.imgNavbar} source= {require('@img/icono_buscador.png')}></Image> 
             <Image style= {styles.imgNavbar} source= {require('@img/icono_papelera.png')}></Image> 
              </Text>
          </View>
        )
    }
}