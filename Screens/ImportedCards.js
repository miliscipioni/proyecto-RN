import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';
import Import from './Import';

class ImportedCards extends Component { 

  constructor(){
    super();
    this.state ={
        importedUsers: []
    }
  }

  componentDidMount(){

  }

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

  render () { 
      const values = this.state.importedUsers.map( item =>
          <Text key = {item.login.uuid}>
              {item.name.first}
          </Text>)
          
      return (
          <View>
              <Text style = {{height: 100}}>relleno</Text>
              <Text>Mostramos los valores importados</Text>
              {values}
              <TouchableOpacity onPress={this.getData.bind(this)}>
                  <View>
                      <Text>Recuperar datos</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.setState({importedUsers: [] })}>
                  <View>
                      <Text>Borrar datos importados</Text>
                  </View>
              </TouchableOpacity>
          </View>
    ) 
  }
}

//export {ImportedCards}
export default ImportedCards;