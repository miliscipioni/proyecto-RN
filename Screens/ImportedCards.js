import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../src/components/Card';
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
} from 'react-native';
import {Import} from './Import';
import {styles} from '../src/Styles';

export class ImportedCards extends Component { 

  constructor(){
    super();
    this.state ={
        importedUsers: [], 
        showModal: false,
        setItem: null,
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
      <Card
      elemento = {item}
      onDelete = {this.borrarTarjeta.bind(this)}
      />
    )
  }

  showModal() {
    this.setState({showModal: true})
  }

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
    var nuevoArray = this.state.importedUsers.filter((tarjeta) => {
      return tarjeta.id !== idTarjeta 
    })
    this.setState({
      importedUsers: nuevoArray
    })
    console.log(nuevoArray);
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
           
            <Header/>
           
             <TouchableOpacity onPress={() => this.showModal()}>
              <Text style = {{color: 'white'}} >ABRETE SESAMO</Text>
              </TouchableOpacity>
              
            <View style={styles.flatlistContainer}> 
            <FlatList
           
              data={this.state.importedUsers}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />

            
            </View>
             {/* {values} */} 
             {/* <TouchableOpacity onPress={this.getDato.bind(this)}>
                  <View>
                      <Text style={{color: 'white'}} >Recuperar datos</Text>
                  </View>
              </TouchableOpacity> */}
              
              <TouchableOpacity onPress={ () => this.setState({importedUsers: [] })}>
                  <View>
                      <Text style={{color: 'white'}} >Borrar datos importados</Text>
                  </View>
              </TouchableOpacity>
              
             {/* <TouchableOpacity onPress={() => }>
                <Text style={{fontSize: 30, color: 'white'}}>Show modal</Text>
              </TouchableOpacity> */}
              <Modal visible={this.state.showModal}
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
              </Modal>
          </View>
         
    ) 
  }
}

//export {ImportedCards}
//export default ImportedCards;