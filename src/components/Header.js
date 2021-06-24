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
          <View style={styles.navbar}> 
  
            <View style={styles.burguerContainer}> 
              <TouchableOpacity onPress= { () => this.props.openDrawer()}>
             
               <Image style={styles.burguerButton} source= {require('@img/icono_sandwich.png')}></Image>
             
              </TouchableOpacity>
            </View> 

            <Text style={styles.navbarDetails}></Text> 
           
             
          </View> 
        )
    }
}