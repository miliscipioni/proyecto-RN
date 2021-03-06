import 'react-native-gesture-handler';
import React, {Component} from 'react'; 
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
import {Header} from '../src/components/Header';
import {Card} from '../src/components/Card';
import * as Font from 'expo-font';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"

const Stack = createStackNavigator();
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
       drawerStyle={{
        backgroundColor: '#221C5C',
       }}
       drawerContentOptions={{
         activeTintColor: '#000000', 
         activeBackgroundColor: '#BAFF94', 
         inactiveTintColor: '#ffffff'
       }}
       >
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Contactos importados' component={ImportedCards}/>
        <Drawer.Screen name='Papelera' component={Bin}/>
        <Drawer.Screen name='Sobre nosotras' component={AboutUs}/>
       {/* <Drawer.Screen name='Importar' component={Import}></Drawer.Screen> */}
        
       </Drawer.Navigator>

     </NavigationContainer>

    // <Bin/>
    // <ImportedCards></ImportedCards>
    
    ) 
  }
}

export default App;
