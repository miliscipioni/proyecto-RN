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
  Button
} from 'react-native';
import {Import} from './Import';
import {styles} from '../src/Styles';

export class ImportedCards extends Component { 

  constructor(){
    super();
    this.state ={
        importedUsers: []
    }
  }

  componentDidMount(){
    
  }

  renderItem = ({item}) => {
    return (
      <Card
      elemento = {item}
      />
    )
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
            
               
            <View style={styles.importedAlert}>
            <Text style={styles.importedAlertBtn}>X</Text>
            <Text style={styles.importedAlertText}> ¡Genial! Se importaron exitosamente X tarjetas </Text> 
              
            </View>

            <View style={styles.flatlistContainer}> 
            <FlatList
           
              data={this.state.importedUsers}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />

            
            </View>
             {/* {values} */} 

              <TouchableOpacity  onPress={this.getData.bind(this)}>
                  <View>
                      <Text style={{color: 'white'}} >Recuperar datos</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.setState({importedUsers: [] })}>
                  <View>
                      <Text style={{color: 'white'}} >Borrar datos importados</Text>
                  </View>
              </TouchableOpacity>
              
          </View>
         
    ) 
  }
}

//export {ImportedCards}
//export default ImportedCards;