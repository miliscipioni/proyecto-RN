import React, {Component} from 'react'; 
import {styles} from './src/Styles';
import {
  Text, 
  View, 
  TouchableOpacity, 
} from 'react-native';

class App extends Component { 
  constructor(){
    super();
      this.state = {
     
      }
  }

  render () { 
    return (
    <View>
        <View style={styles.container}> 
            <View style={styles.navbar}>
                  <Text style={styles.navbarDetails}>Home</Text>
            </View>

         
        </View>
    </View>
     )
    
  }
}

export default App;
