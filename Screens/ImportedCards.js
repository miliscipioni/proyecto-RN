import React, {Component} from 'react'; 
import {styles} from './src/Styles';
import {
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Styles'

export class ImportedCards extends Component { 
  render () {
      return(
        <View> 
            <Text>Aca se muestran las tarjetas importadas</Text>
        </View>

      )
   }
}
export default ImportedCards;