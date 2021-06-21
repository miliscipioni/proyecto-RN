import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react'; 
import {getData} from '../src/api/RandomUsers';
import Card from '../src/components/Card';
import {Header} from '../src/components/Header';
import {
  Alert,
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
  Button,
} from 'react-native';
import {styles} from '../src/Styles';
export class Home extends Component { 
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
  getData()
  .then( (usuarios) => {
    console.log(usuarios),
    this.setState({users: usuarios});
  });
   
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

  renderItem = ({item}) => {
    return (
      <Card
      elemento = {item}/>
    )
  }

  keyExtractor = (item, idx) => idx.toString()



  render () {
      return(

        <View style={styles.container}> 
          
        <Header/>
      
        <View style={styles.flatlistContainer}> 
            <FlatList
              data={this.state.users}
              keyExtractor= { this.keyExtractor }
              renderItem= { this.renderItem }
              numColumns={2}
            
            />
          
          <TouchableOpacity onPress={this.storeData.bind(this)}>
                    <View>
                        <Text style={{color: 'white', fontSize: 20}}>Guardar datos</Text>
                    </View>
                </TouchableOpacity>
        </View>

     
       </View>
      )
   }
}
