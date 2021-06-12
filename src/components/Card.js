import React, {Component} from 'react'; 
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Styles';

export class Card extends Component {
    render() {
        return (
            <View style= {styles.card}>

            <Image style={styles.cardImage} source={{uri: this.props.elemento.picture.large}}></Image>
            <Text style= {styles.principalText}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
            <Text style= {styles.secondaryText}>{this.props.elemento.email}</Text> 
            <Text style={styles.secondaryText}>{this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)</Text> 
            <Text style={styles.btnDescripcion}>Ver más</Text>

            </View>
        )
    }
}
