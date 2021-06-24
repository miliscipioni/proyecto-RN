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
    }
  } 

  keyExtractor = (item, idx) => idx.toString();

  renderItem = ({item}) => {
    return (
      <DeleteUsers 
      elemento = {item}
      onDelete = {this.eliminaciónDefinitiva.bind(this)}
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

  eliminaciónDefinitiva(idTarjeta){
    let nuevoArray = this.state.tarjetasBorradas.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta 
    });
    this.setState({
      tarjetasBorradas: nuevoArray,
    })
  };

  async removeValue(key){
    try {
      await AsyncStorage.removeItem(key);
      this.setState(Alert.alert("Se borraron los contactos exitosamente."))
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    return(
      <View style={styles.container}> 
        
        <Text style={styles.navbarDetails}>Papelera de reciclaje</Text>

        <TouchableOpacity onPress={this.getData.bind(this)}>
            <Text style={{color: 'white'}}>Ver datos borrados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.removeValue("Papelera") && this.setState({tarjetasBorradas: [] })}>
            <Text style={{color: 'white'}}>VACIAR PAPELERA</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.tarjetasBorradas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

      </View>
    )
  }
}


