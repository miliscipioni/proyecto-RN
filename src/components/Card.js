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
  TextInput,
  Pressable
} from 'react-native';
import {styles} from '../Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Card extends Component {
    constructor(){
        super();
        this.state ={
            showModal: false,
            comentario: " ",
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
                        <Text style={styles.btnDescripcion}>Ver más</Text>
                        <View style={styles.btnMasBorde}>
                            <Text  style={styles.btnMas}>+</Text>
                        </View>
                    </View>
                </TouchableOpacity> 

               <TouchableOpacity onPress= {this.props.onImportar.bind(this, this.props.elemento.id)}>
                    <View style={styles.btnImportar}>                       
                       <Text style={styles.modalBtnImportar}>IMPORTAR</Text> 
                    </View>
                </TouchableOpacity>
            

                <Modal visible={this.state.showModal} animationType="" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Image style={styles.cardImageModal} source={{uri: this.props.elemento.picture.large}}></Image>
                            <Text style= {styles.principalTextModal}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
                            <Text style= {styles.secondaryTextModal}>
                            <Text style={styles.detailsTitleModal}> Email:  </Text>
                                {this.props.elemento.email}</Text> 
                            <Text style={styles.secondaryTextModal}>
                                <Text style={styles.detailsTitleModal}>Fecha de nacimiento: </Text>
                                {this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)
                            </Text> 

                            <Text style= {styles.secondaryTextModal}>
                                <Text style={styles.detailsTitleModal}>Calle y número: </Text>
                                {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}
                            </Text>
                            <Text style= {styles.secondaryTextModal}>
                                <Text style={styles.detailsTitleModal}> Ciudad/Estado: </Text>
                                {this.props.elemento.location.city}/{this.props.elemento.location.state}
                            </Text>
                            <Text style= {styles.secondaryTextModal}> 
                                <Text style={styles.detailsTitleModal}> País: </Text>
                                {this.props.elemento.location.country}
                            </Text>
                            <Text style= {styles.secondaryTextModal}>
                                <Text style={styles.detailsTitleModal}> Código postal: </Text>
                                {this.props.elemento.location.postcode}
                            </Text>
                            <Text style= {styles.secondaryTextModal}> 
                                <Text style= {styles.detailsTitleModal}> Fecha de Registro: </Text>
                                {this.props.elemento.registered.date.substring(0, 10)}
                            </Text>
                            <Text style= {styles.secondaryTextModal}> 
                                <Text style= {styles.detailsTitleModal}> Teléfono: </Text> 
                                {this.props.elemento.phone}
                            </Text>
                    
                            <Text style= {styles.secondaryTextModal}> 
                                <Text style= {styles.detailsTitleModal}> Comentario: {this.state.comentario} </Text> 

                            </Text>

                            <TextInput style={styles.comentario} placeholder='Ingresar comentario' multiline numberOfLines={2} onChangeText= {value => this.setState({comentario: value})}></TextInput>
                            <Button title= "Comentar" onPress= {()=>this.funComentario(this.state.item)}> </Button>
                           

                            <TouchableOpacity onPress= {() => this.setState({showModal: false})}>
                                <View>
                                    <Text style={styles.botonSalir}>X</Text>
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
