import React, {Component} from 'react'; 
import {styles} from './src/Styles';
import {
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  ImageStore
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
                  <Text style={styles.navbarDetails}>Home
                  <Image style= {styles.imgNavbar} source= {require('@img/icono_buscador.png')}></Image>
                  <Image style= {styles.imgNavbar} source= {require('@img/icono_papelera.png')}></Image>
                  </Text>
            </View>

         
        </View>
    </View>
     )
    
  }
}

export default App;
