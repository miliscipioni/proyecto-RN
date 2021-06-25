import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteUsers from '../src/components/DeleteUsers';
import {
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from '../src/Styles';

export class Bin extends Component { 

  constructor(){
    super();
    this.state ={
        tarjetasBorradas: [], 
        tarjetasRestauradas: [],
        importedUsers: [],
    }
  } 

  keyExtractor = (item, idx) => idx.toString();

  renderItem = ({item}) => {
    return (
      <DeleteUsers 
      elemento = {item}
      onDelete = {this.deleteCard.bind(this)}
      onRecover = {this.recoverItem.bind(this)}
      />
    )
  };

  async getData(){
    try{
        const resultado = await AsyncStorage.getItem("Papelera");
        this.setState({tarjetasBorradas: JSON.parse(resultado)});
        return resultado;
    }
    catch(error){
        console.log(error)
    }
  }

  async deleteAll(key){
    try {
      await AsyncStorage.removeItem(key);
      this.setState(Alert.alert("Se borraron los contactos exitosamente."))
    } catch (error) {
      console.log(error);
    }
  }

  async papeleraStorage(){
    try{
        const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
        await AsyncStorage.setItem("Papelera", jsonUsers);
        Alert.alert("Datos almacenados correctamente");
        // console.log(this.state.tarjetasBorradas);
    }
    catch(error){
        console.log(error)
    }
  } 

  async deleteCard(idTarjeta){
    try{
      // const resultado = await AsyncStorage.getItem("Papelera");
      // let objetoRecuperado = JSON.parse(resultado);
      // this.setState({tarjetasBorradas: objetoRecuperado});
      let borradoDefinitivo = this.state.tarjetasBorradas.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta 
      });
      this.setState({
        tarjetasBorradas: borradoDefinitivo,
      });
      console.log(this.state.tarjetasBorradas);
      // const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
      // await AsyncStorage.setItem("Papelera", jsonUsers);
      // Alert.alert("Datos almacenados correctamente");
    }
    catch(error){
        console.log(error)
    }
  };

  async recoverItem(idTarjeta){
    try{
      let updateBorradas = this.state.tarjetasBorradas.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta
      });
      let tarjetaRestaurada = this.state.tarjetasBorradas.filter((tarjeta) => {
        return tarjeta.id === idTarjeta 
      });
      const resultado = await AsyncStorage.getItem("Users");
      let objetoRecuperado = JSON.parse(resultado);
      this.setState({
        importedUsers: objetoRecuperado,
        tarjetasBorradas: updateBorradas,
      });
      let tarjetasRestauradas = this.state.importedUsers.concat(tarjetaRestaurada);
      this.setState({
        tarjetasBorradas: updateBorradas,
        importedUsers: tarjetasRestauradas,
      });
      const jsonUsers = JSON.stringify(this.state.importedUsers);
        await AsyncStorage.setItem("Users", jsonUsers);
      // console.log(this.state.importedUsers);
    }
    catch(error){
        console.log(error)
    }
  };

  // async updateStorage(){
  //   try{
  //       const jsonUsers = JSON.stringify(this.state.tarjetasBorradas);
  //       await AsyncStorage.setItem("Papelera", jsonUsers);
  //       Alert.alert("Datos actualizados");
  //       // console.log(this.state.tarjetasBorradas);
  //   }
  //   catch(error){
  //       console.log(error)
  //   }
  // };

  render () {
    return(
      <View style={styles.container}> 
        
        <Text style={styles.papelera}>Papelera de reciclaje</Text>

        <TouchableOpacity onPress={this.getData.bind(this)}>
            <Text style={styles.textoAbajoPapelera}>Ver datos borrados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.deleteAll("Papelera") && this.setState({tarjetasBorradas: [] })}>
            <Text style={styles.textoAbajoPapelera2}>Vaciar Papelera</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.papeleraStorage.bind(this)}>
            <Text style={styles.textoAbajoPapelera3}>Eliminar items marcados de forma definitiva</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={this.updateStorage.bind(this)}>
            <Text style={{color: 'white'}}>Actualizar almacenamiento de borradas</Text>
        </TouchableOpacity> */}


        <FlatList
          data={this.state.tarjetasBorradas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

      </View>
    )
  }
}


