import React, {Component} from 'react'; 
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
  Button
} from 'react-native';
import {styles} from '../Styles';

export class Header extends Component {
    render() {
        return (
          <View style={styles.navbar}> 
            <View style={styles.burguerContainer}>
              <TouchableOpacity onPress= { () => this.props.navigation.openDrawer()}>
                <View style={styles.burguerButton}>
                  <Image style={styles.burguerIcon} source= {require('@img/icono_sandwich.png')}></Image> 
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.navbarDetails}>Home  </Text> 


            <Image style= {styles.searchIcon} source= {require('@img/icono_buscador.png')}  onPress= { () => this.props.navigation.redirect("../../Screens/Buscar")}></Image> 
            
            {/* <Image style= {styles.binIcon} source= {require('@img/icono_papelera.png')}></Image>  */}
           
             
          </View> 
        )
    }
}