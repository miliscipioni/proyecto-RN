import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import {styles} from '../Styles';

export class Header extends Component {


    render() {
        return (
          <View> 
  
            <View > 
              <TouchableOpacity onPress= { () => this.props.openDrawer()}>
             
                  <Text style={{margin: 30}}>prueba</Text>
                  {/* <Image style={styles.burguerIcon} source= {require('@img/icono_sandwich.png')}></Image> */}
             
              </TouchableOpacity>
            </View> 

            <Text style={styles.navbarDetails}>Home  </Text> 


          {/*  <Image style= {styles.searchIcon} source= {require('@img/icono_buscador.png')}  onPress= { () => this.props.navigation.redirect("../../Screens/Buscar")}></Image> */}
            
            {/* <Image style= {styles.binIcon} source= {require('@img/icono_papelera.png')}></Image>  */}
           
             
          </View> 
        )
    }
}