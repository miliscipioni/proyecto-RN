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
        updateUsers: [],
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

  borrarTarjeta(idTarjeta){
    
    //si tarjeta.id y idTarjeta son distintos (true) deja ese item, caso contrario, osea que tarjeta.id y idTarjeta sean iguales (false) sacame la tarjeta.
    let nuevoArray = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta
        
    });

    // Alert.alert("Datos actualizados", [{
    //   text: "Guardar en papelera y actualizar data",
    //   onPress: () => console.log("Cancel Pressed"),
    //   // onPress: () => this.papeleraStorage.bind(this)
    // }] )

    let tarjetaBorrada = this.state.importedUsers.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    let tarjetasBorradas = this.state.tarjetasBorradas.concat(tarjetaBorrada);

    this.setState({
      importedUsers: nuevoArray,
      updateUsers: nuevoArray,
      tarjetasBorradas: tarjetasBorradas,
    })
  };

  async updateStorage(){
    try{
        const jsonUsers = JSON.stringify(this.state.updateUsers);
        await AsyncStorage.setItem("Users", jsonUsers);
        Alert.alert("Datos actualizados");
        console.log(this.state.updateUsers);
    }
    catch(error){
        console.log(error)
    }
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
            <Text style={styles.navbarDetailsContactosImp}>Contactos Importados</Text> 
           
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
                        <Text style = {{color: 'white'}}>Mandar datos eliminados a papelera</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.updateStorage.bind(this)}>
                    <View>
                        <Text style = {{color: 'white'}}>Actualizar data</Text>
                    </View>
            </TouchableOpacity>

             {/* {values} */} 
             <TouchableOpacity onPress={this.getData.bind(this)}>
                  <View>
                      <Text style={{color: 'white'}} >Importar datos</Text>
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