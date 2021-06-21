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
  TextInput
} from 'react-native';
import {styles} from '../Styles';

class Card extends Component {
    constructor(){
        super();
        this.state ={
            showModal: false,
            comentario: " ",
        }
      }

    agregarComentario() {
        getData() 
        .then((com)=>{this.setState({comenario: com})});
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
        <TouchableOpacity>
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
                        <TouchableOpacity style={styles.btnModal} onPress= {() => this.setState({showModal: false})}>
                        <View style={styles.modalCloseBtnContainer}>
                        <Text style={styles.modalCloseBtn}>X</Text>
                        </View>
                        </TouchableOpacity>

                        <Text style= {styles.secondaryTextModal}> 
                            <Text style= {styles.detailsTitleModal}> {this.state.comentario} </Text>                            
                        </Text>

                        <TextInput style={styles.InputCantUsuarios} placeholder='Ingresar comentario'></TextInput>
                        <TouchableOpacity onPress= {() => this.agregarComentario}>
                            <View style={styles.btnComentar}>
                                <Text style={styles.modalBtnText} >COMENTAR</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.btnBorrar}>
                                <Text style={styles.modalBtnText}>BORRAR</Text>
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
