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
  ScrollView
} from 'react-native';
import {styles} from '../src/Styles';

export class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      users: [], 
      busqueda: [],
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
      elemento = {item}
      onComentar = {this.comentarTarjeta.bind(this)}
      />
    )
  }

  keyExtractor = (item, idx) => idx.toString()

  buscador(text) {
    let busqueda = this.state.users.filter ((usuario) => {
      return usuario.name.first.toLowerCase().includes(text.toLowerCase()) ||
      usuario.name.last.toLowerCase().includes(text.toLowerCase()) || 
      usuario.location.country.toLowerCase().includes(text.toLowerCase()) ||
      usuario.location.city.toLowerCase().includes(text.toLowerCase())
    })
    this.setState ({
        users: busqueda
    })
    console.log(busqueda)
}


  // let nuevoArray = this.state.importedUsers.filter((tarjeta) => {
  //     return tarjeta.id !== idTarjeta,
  // });

comentarTarjeta() {
  let nuevoComentario = this.state.comentario
  this.setState({
    comentario: nuevoComentario
  })
  console.log(nuevoComentario)
};


  render () {
      return(
        
        <View style={styles.container}> 
        <ScrollView>

       <Header
        openDrawer = {this.props.navigation.openDrawer}
       /> 
       {/* <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
          <Image style= {styles.burgerIcon} source= {require('@img/icono_sandwich.png')}/>
      </TouchableOpacity> */}

        <TextInput style={styles.inputBusqueda} placeholder='Ingresar búsqueda' onChangeText={ (text) => this.buscador(text)}> </TextInput>
        <Image style= {styles.searchIcon} source= {require('@img/icono_buscador.png')}></Image>

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
            
            />
          </View>

          <TouchableOpacity onPress={this.storeData.bind(this)}>
            <View>
                <Text style={{color: 'white', fontSize: 20}}>Guardar datos</Text>
            </View>
          </TouchableOpacity>
        


      </ScrollView>
      </View>
       
      )
   }
}
