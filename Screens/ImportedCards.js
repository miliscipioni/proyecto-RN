import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card_2 from '../src/components/Card_2';
import {Header} from '../src/components/Header';
import {getData} from  '../src/api/RandomUsers';
import {
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Modal,
  Alert,
} from 'react-native';
import {Import} from './Import';
import {styles} from '../src/Styles';

export class ImportedCards extends Component { 

  constructor(props){
    super(props);
    this.state ={
        importedUsers: [], 
        showModal: false,
        setItem: null,
        tarjetasBorradas: [],
        comentario: " ",
    }
  }

  componentDidMount(){
    // async function getDato(){
    //       try{
    //           const resultado = await AsyncStorage.getItem("Users");
    //           this.setState({importedUsers: JSON.parse(resultado)});
    //           return resultado;
    //       }
    //       catch(error){
    //           console.log(error)
    //       }
    //   }
  }

  renderItem = ({item}) => {
    return (
      <Card_2
      elemento = {item}
      onDelete = {this.borrarTarjeta.bind(this)}
      onComentar ={this.agregarComentario.bind(this)}
      />
    )
  }

  // showModal() {
  //   this.setState({showModal: true})
  // }

  keyExtractor = (item, idx) => idx.toString()
  
  async getData(){
      try{
          const resultado = await AsyncStorage.getItem("Users");
          this.setState({importedUsers: JSON.parse(resultado)});
          return resultado;
      }
      catch(error){
          console.log(error)
      }
  } 

  borrarTarjeta(idTarjeta){
    //si tarjeta.id y idTarjeta son distintos (true) deja ese item, caso contrario, osea que tarjeta.id y idTarjeta sean iguales (false) sacame la tarjeta.
    let nuevoArray = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta 
    });

    let tarjetasBorradas = this.state.importedUsers.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    this.setState({
      importedUsers: nuevoArray,
    //Haciendo esto se guarda un unico usuario en la papelera, tengo que lograr que los usuarios borrados se sumen al array de tarjetasBorradas.
      tarjetasBorradas: tarjetasBorradas,
    })
    
  };


  agregarComentario() {
    let nuevoComentario = this.state.comentario
    this.setState({
      comentario: nuevoComentario
    })
  };


  async papeleraStorage(){
    try{
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        Alert.alert("Datos almacenados correctamente");
        console.log(this.state.tarjetasBorradas);
    }
    catch(error){
        console.log(error)
    }
} 

  render () { 
      {/*const values = this.state.importedUsers.map( item =>
        <Card key = {item.login.uuid} elemento = {item}/>)
        // <Text key = {item.login.uuid}>
        //  {item.name.first}
      // </Text>) */}
      //   console.log(this.state.importedUsers.length);
      return (
          <View style={styles.container}>
           
            <Header
            openDrawer = {this.props.navigation.openDrawer}
            />
           
             {/* <TouchableOpacity onPress={() => this.showModal()}>
              <Text style = {{color: 'white'}} >ABRETE SESAMO</Text>
              </TouchableOpacity>
               */}
            <View style={styles.flatlistContainer}> 
            <FlatList
           
              data={this.state.importedUsers}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />
            </View>

            <TouchableOpacity onPress={this.papeleraStorage.bind(this)}>
                    <View>
                        <Text style = {{color: 'white'}}>Guardar datos borrados</Text>
                    </View>
            </TouchableOpacity>

             {/* {values} */} 
             <TouchableOpacity onPress={this.getData.bind(this)}>
                  <View>
                      <Text style={{color: 'white'}} >Recuperar datos</Text>
                  </View>
              </TouchableOpacity>
              
              
              
             {/* <TouchableOpacity onPress={() => }>
                <Text style={{fontSize: 30, color: 'white'}}>Show modal</Text>
              </TouchableOpacity> */}
              {/* <Modal visible={this.state.showModal}
              transparent={true}
              animationType= "slide">
                <View style={styles.modalContainerImportedCards}>
                <TouchableOpacity onPress={this.getData.bind(this)} >
                <View style={styles.modalImportedCards}>
                <Text style={styles.modalImportedCardsText}>¡Genial! Se importaron exitosamente X tarjetas</Text>
                  <Text style={styles.closeButtonModalImportedCards}
                        onPress={ () => this.setState({showModal: false})} >X</Text>
                </View>
                </TouchableOpacity>
                </View>
              </Modal> */}
          </View>
         
    ) 
  }
}

//export {ImportedCards}
//export default ImportedCards;