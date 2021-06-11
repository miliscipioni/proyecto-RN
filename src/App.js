import React, {Component} from 'react'; 
import {Home} from '../Screens/Home';
import {styles} from './Styles';
import {
  Text, 
  View, 
} from 'react-native';
import ImportedCards from '../Screens/ImportedCards';
import Import from '../Screens/Import';

class App extends Component { 

  constructor(){
    super();
  }

  render () { 
    return (
      <Import/>
    ) 
  }
}

export default App;
