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
  Alert,
  TextInput,
  Image
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
    }
  }

  componentDidMount(){

  }

  renderItem = ({item}) => {
    return (
      <Card_2
      elemento = {item}
      onDelete = {this.borrarTarjeta.bind(this)}
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

  buscador(text) {
    let busqueda = this.state.importedUsers.filter ((usuario) => {
      return usuario.name.first.toLowerCase().includes(text.toLowerCase()) ||
      usuario.name.last.toLowerCase().includes(text.toLowerCase()) || 
      usuario.location.country.toLowerCase().includes(text.toLowerCase()) ||
      usuario.location.city.toLowerCase().includes(text.toLowerCase())
    })
    this.setState ({
      importedUsers: busqueda
    })
    console.log(busqueda)
}

  borrarTarjeta(idTarjeta){

    //si tarjeta.id y idTarjeta son distintos (true) deja ese item, caso contrario, osea que tarjeta.id y idTarjeta sean iguales (false) sacame la tarjeta.
    let nuevoArray = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta,
        Alert.alert("Recuerda actualizar los datos!")
    });

    let tarjetaBorrada = this.state.importedUsers.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    let tarjetasBorradas = this.state.tarjetasBorradas.concat(tarjetaBorrada);

    this.setState({
      importedUsers: nuevoArray,
      tarjetasBorradas: tarjetasBorradas,
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
            

          <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
            <Image style= {styles.burgerIcon} source= {require('@img/icono_sandwich.png')}/>
          </TouchableOpacity>
            <Text style={styles.navbarDetailsContactosImp}>Contactos Importados</Text> 
           
            <TextInput style={styles.inputBusquedaImportados} placeholder='Ingresar búsqueda' onChangeText={ (text) => this.buscador(text)}> </TextInput>
            <Image style= {styles.searchIconImportados} source= {require('@img/icono_buscador.png')}></Image>



            <TouchableOpacity onPress={this.papeleraStorage.bind(this)}>
                <Text style = {styles.textoAbajoImportados}>Actualizar data</Text>
            </TouchableOpacity>

             {/* {values} */} 
             <TouchableOpacity onPress={this.getData.bind(this)}>
                <Text style={styles.textoAbajoImportados2} >Importar data</Text>
              </TouchableOpacity>

             {/* <TouchableOpacity onPress={() => this.showModal()}>
              <Text style = {{color: 'white'}} >ABRETE SESAMO</Text>
              </TouchableOpacity>
               */}
            <View style={styles.flatlistContainerImportados}> 
            <FlatList
           
              data={this.state.importedUsers}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />
            </View>
              
              
              
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