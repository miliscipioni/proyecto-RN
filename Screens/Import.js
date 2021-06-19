import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react'; 
import { Alert, TouchableOpacity, Text, View, Image } from 'react-native';
export class Import extends Component { 

    constructor(){
      super();
      this.state ={
          users:[]
      }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=15")
        .then(response => response.json())
        .then(result => {
            this.setState({users: result.results})
        })
    }

  async storeData(){
        try{
            const jsonUsers = JSON.stringify(this.state.users);
            await AsyncStorage.setItem("Users", jsonUsers);
            Alert.alert("Datos almacenados correctamente")
        }
        catch(error){
            console.log(error)
        }
    } 
  
    render () { 
        const values = this.state.users.map( item =>
            <Text key = {item.login.uuid}>
                {item.name.first}
            </Text>)
            
        return (
            <View>
                <Text style = {{margin: 100}}>Mostramos las tarjetas del fetch para importar</Text>
                {values}
                <TouchableOpacity onPress={this.storeData.bind(this)}>
                    <View>
                        <Text>Guardar datos</Text>
                    </View>
                </TouchableOpacity>
            </View>
      ) 
    }
  }
  
  //export {Import}
  // export default Import;