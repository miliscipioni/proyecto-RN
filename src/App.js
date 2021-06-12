import React, {Component} from 'react'; 
import {Home} from '../Screens/Home';
import {styles} from './Styles';
import {
  Text, 
  View, 
} from 'react-native';
import ImportedCards from '../Screens/ImportedCards';
import Import from '../Screens/Import';
import * as Font from 'expo-font';

class App extends Component { 

  render () { 
    return (
      <Home/>
    ) 
  }
}

export default App;
