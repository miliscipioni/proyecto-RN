import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteUsers from '../src/components/DeleteUsers';
import {
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../src/Styles';

export class Bin extends Component { 

  constructor(){
    super();
    this.state ={
        tarjetasBorradas: [], 
        remove_msg: "",
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
      this.setState({remove_msg: "se borro exitosamente"})
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    return(
      <View style={styles.container}> 
        
        <Text style={styles.navbarDetails}>Papelera de reciclaje</Text>

        <FlatList
          data={this.state.tarjetasBorradas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

        <TouchableOpacity onPress={() => this.removeValue("Papelera")}>
          <Text style={{color: 'white'}}>Limpiar almacenamiento</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.getData.bind(this)}>
            <Text style={{color: 'white'}}>Ver datos borrados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.setState({tarjetasBorradas: [] })}>
            <Text style={{color: 'red'}}> VACIAR PAPELERA </Text>
        </TouchableOpacity>

      </View>
    )
  }
}


