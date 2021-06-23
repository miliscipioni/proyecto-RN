import React, {Component} from 'react'; 
import {
  Text, 
  View, 
  Image, 
  Modal,
  Button,
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import {styles} from '../src/Styles';


export class Buscar extends Component {

    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.buscar}> Buscador</Text>
                
                



                <Text style={styles.goBack} onPress= {()=> this.props.navigation.navigate("Home")}> Go back!</Text>
            </View>
        )
    }
}