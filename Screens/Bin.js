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
    }
  } 

  // keyExtractor = (item, idx) => idx.toString();

  // renderItem = ({item}) => {
  //   return (
  //     <DeleteUsers 
  //     elemento = {item}
  //     />
  //   )
  // }

  async getDato(){
    try{
        const resultado = await AsyncStorage.getItem("Papelera");
        this.setState({tarjetasBorradas: JSON.parse(resultado)});
        return resultado;
    }
    catch(error){
        console.log(error)
    }
  }

  render () {

    const values = this.state.tarjetasBorradas.map( item =>
      <DeleteUsers key = {item.login.uuid} elemento = {item}/>)

    return(
      <View> 
        <Text style = {{width:"100%", marginTop: "50%"}}>PAPELERA DE RECICLAJE</Text>

        {/* <View style={styles.flatlistContainer}> 
          <FlatList
            data={this.state.tarjetasBorradas}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            numColumns={1}
          />
        </View> */}

        {values}

        <TouchableOpacity onPress={this.getDato.bind(this)}>
          <View>
            <Text>Ver datos borrados</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.setState({tarjetasBorradas: [] })}>
          <View>
            <Text style={{color: 'red'}}>BORRAR DE FORMA PERMANENTE</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


