import 'react-native-gesture-handler';
import React, {Component} from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../Screens/Home';
import {styles} from './Styles';
import {
  DrawerLayoutAndroid,
  Text, 
  View, 
} from 'react-native';
import {ImportedCards} from '../Screens/ImportedCards';
import {Import} from '../Screens/Import';
import {AboutUs} from '../Screens/AboutUs';
import {Bin} from '../Screens/Bin';
import * as Font from 'expo-font';

const Drawer = createDrawerNavigator();
class App extends Component { 

  render () { 
    return (
     <NavigationContainer>
       <Drawer.Navigator
       initialRouteName="Home"
       drawerPosition="left"
       drawerType= "slide"
       overlayColor= "rgba(25, 25, 112, 0.4)"
       >
        
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name='Contactos importados' component={ImportedCards}></Drawer.Screen>
        <Drawer.Screen name='Papelera' component={Bin}></Drawer.Screen>
        <Drawer.Screen name='Sobre nosotras' component={AboutUs}></Drawer.Screen>
        <Drawer.Screen name='Importar' component={Import}></Drawer.Screen>
        

       </Drawer.Navigator>
     </NavigationContainer>
    ) 
  }
}

export default App;
