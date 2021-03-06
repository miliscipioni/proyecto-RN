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
        comentario: " ",
    }
  }

  componentDidMount(){

  }
  async funComentario(value){
    try{
        let comentario = this.state.comentario;
        let users = this.state.importedUsers;
        users.map((contacto)=>{
          contacto.funComentario = comentario
        })
        const jsonObj = JSON.stringify(users)
        await AsyncStorage.setItem("users", jsonObj)

        this.setState({
          importedUsers: users,
          comentario: value
        })

    }catch(error){
        console.log(error)
    }
}

  renderItem = ({item}) => {
    return (
      <Card_2
      elemento = {item}
      onDelete = {this.borrarTarjeta.bind(this)}
      onComentar = {this.funComentario.bind(this)}
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

  async borrarTarjeta(idTarjeta){
    try{
      let updateUsers = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta
      });
      let tarjetaBorrada = this.state.importedUsers.filter((tarjeta) => {
        return tarjeta.id === idTarjeta 
      });
      const resultado = await AsyncStorage.getItem("Papelera");
      this.setState({tarjetasBorradas: JSON.parse(resultado)}); 
      if (this.state.tarjetasBorradas === null) {
        this.setState({tarjetasBorradas: []})
        let tarjetasBorradas = this.state.tarjetasBorradas.concat(tarjetaBorrada);
        await this.setState({
          importedUsers: updateUsers,
          tarjetasBorradas: tarjetasBorradas,
        });
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        this.setState({tarjetasBorradas: []});
        const jsonCards = JSON.stringify(this.state.importedUsers);
        await AsyncStorage.setItem("Users", jsonCards);
      } else {
        let tarjetasBorradas = this.state.tarjetasBorradas.concat(tarjetaBorrada);
        await this.setState({
          importedUsers: updateUsers,
          tarjetasBorradas: tarjetasBorradas,
        });
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        this.setState({tarjetasBorradas: []});
        const jsonCards = JSON.stringify(this.state.importedUsers);
        await AsyncStorage.setItem("Users", jsonCards);
      }
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

              <View>
                <Text onPress={this.getData.bind(this)} style={styles.textoAbajoImportados2}>Importar datos</Text>
              </View>
               
            <View style={styles.flatlistContainerImportados}> 
            <FlatList
           
              data={this.state.importedUsers}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />
            </View>

            <TouchableOpacity>
              <TextInput style={styles.inputBusquedaImportados} placeholder='Ingresar b??squeda' onChangeText={ (text) => this.buscador(text)}> </TextInput>
              <Image style= {styles.searchIconImportados} source= {require('@img/icono_buscador.png')}></Image>
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
                <Text style={styles.modalImportedCardsText}>??Genial! Se importaron exitosamente X tarjetas</Text>
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