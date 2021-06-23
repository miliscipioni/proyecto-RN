import React, {Component} from 'react'; 
import {
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Bin } from '../../Screens/Bin';


class DeleteUsers extends Component {
    constructor(){
        super();
        this.state ={
        }
      }
    render() {
        return (
            <View style= {styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.elemento.picture.large}}></Image>
                <View style= {styles.textCard}>
                    <Text style= {styles.principalText}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
                    <Text style= {styles.secondaryText}>{this.props.elemento.email}</Text> 
                    <Text style={styles.secondaryText}>{this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)</Text>
                </View>
                <TouchableOpacity onPress={this.props.onDelete.bind(this, this.props.elemento.id)}>
                        <Text>Borrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principalText: {
        fontSize: 22,
        color: '#000000',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 5,
        fontWeight: 'bold',
    },
    card: { 
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flex: 1,
        height: 280,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 15,
        position: 'relative',
    }, 
    cardImage: {
        flex: 2,
        height: 200,
        position: 'relative',
    },
    secondaryText: {
        fontSize: 18,
        padding: 5,
        justifyContent: 'center',
        alignSelf: 'center',
    }, 
  });

export default DeleteUsers;
