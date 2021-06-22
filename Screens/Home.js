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
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from '../src/Styles';
export class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      users: [], 
      textHandler: '',
      comentario: " ",
    }
  }

  componentDidMount() {
  getData(4)
  .then( (usuarios) => {
    console.log(usuarios),
    this.setState({users: usuarios});
  });
   
  }

  agregarContactos = () => {
    getData(this.state.textHandler) 
    .then((usuarios)=> {
    usuarios = this.state.users.concat(usuarios)
    this.setState({users: usuarios})
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

  renderItem = ({item}) => {
    return (
      <Card
      elemento = {item}/>
    )
  }

  keyExtractor = (item, idx) => idx.toString()

  agregarComentario() {
    let nuevoComentario = this.state.comentario.bind()
    this.setState({
        comentario: nuevoComentario
    })
};


  render () {
      return(
        
        <View style={styles.container}> 
        <ScrollView>

       <Header
        openDrawer = {this.props.navigation.openDrawer}
       /> 

      <Text style={styles.textCantUsuarios}>¡Hola! ¿Cuántas tarjetas te gustaría visualizar?</Text>
    {/*  <Text style={{fontSize: 12, color: 'white'}}>Handler: {this.state.textHandler}</Text>
      <Text style={{fontSize: 12, color: 'white'}}>Texto: {this.state.texto}</Text> */}
      <TextInput style={styles.InputCantUsuarios}
                placeholder='Ingresar cantidad de tarjetas'
                keyboardType= 'numeric'
                onChangeText={ text => this.setState({textHandler: text})}

      ></TextInput>

      <TouchableOpacity onPress={() => this.agregarContactos()} >
        <View style={styles.containerbtnAgregarTarjetas} >
          <Text style={styles.btnAgregarTarjetas} >
            AGREGAR 
          </Text>
        </View>
      </TouchableOpacity>


        <View style={styles.flatlistContainer}> 
            <FlatList
              data={this.state.users}
              keyExtractor= { this.keyExtractor }
              renderItem= { this.renderItem }
              numColumns={2}
              onComentar= {this.agregarComentario.bind(this)}
            
            />
          
          <TouchableOpacity onPress={this.storeData.bind(this)}>
            <View>
                <Text style={{color: 'white', fontSize: 20}}>Guardar datos</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
      </View>
       
      )
   }
}
