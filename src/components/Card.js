import React, {Component} from 'react'; 
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  Image, 
  Modal,
  Button,
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Styles';

class Card extends Component {

    constructor(){
        super();
        this.state ={
            showModal: false,
        }
      }

    render() {
        return (
            <View style= {styles.card}>
           <Image style={styles.cardImage} source={{uri: this.props.elemento.picture.large}}></Image>
            <Text style= {styles.principalText}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
            <Text style= {styles.secondaryText}>{this.props.elemento.email}</Text> 
            <Text style={styles.secondaryText}>{this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)</Text> 
        <TouchableOpacity onPress= {() => this.setState({showModal: true})} style={styles.btnDescripcion}>
            <View style={styles.moreContainer}>
            <Text  style={styles.btnDescripcion}>Ver más</Text>
            <View style={styles.btnMasBorde}>
            <Text  style={styles.btnMas}>+</Text>
            </View>
            </View>
        </TouchableOpacity> 

            <Modal visible={this.state.showModal} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Image style={styles.cardImage} source={{uri: this.props.elemento.picture.large}}></Image>
                        <Text style= {styles.principalText}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
                        <Text style= {styles.secondaryText}>{this.props.elemento.email}</Text> 
                        <Text style={styles.secondaryText}>{this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)</Text> 
                        <Text style= {styles.secondaryText}>Calle y número: {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}</Text>
                        <Text style= {styles.secondaryText}>Ciudad/Estado: {this.props.elemento.location.city}/{this.props.elemento.location.state}</Text>
                        <Text style= {styles.secondaryText}>País: {this.props.elemento.location.country}</Text>
                        <Text style= {styles.secondaryText}>Código postal: {this.props.elemento.location.postcode}</Text>
                        <Text style= {styles.secondaryText}>Fecha de Registro: {this.props.elemento.registered.date.substring(0, 10)}</Text>
                        <Text style= {styles.secondaryText}>Teléfono: {this.props.elemento.phone}</Text>
                        <TouchableOpacity style={styles.btnModal} onPress= {() => this.setState({showModal: false})}>
                        <View style={styles.modalCloseBtnContainer}>
                        <Text style={styles.modalCloseBtn}>X</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            </View>
        )
    }
}

export default Card;
