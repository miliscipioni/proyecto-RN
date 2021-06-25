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
      importedUsers: [],
      item: null,
    }
  }

  componentDidMount() {
  getData(4)
  .then( (usuarios) => {
    console.log(usuarios),
    this.setState({users: usuarios});
  });
  }

  async funComentario(value){
    try{
        let comentario = this.state.comentario;
        let users = this.state.users;
        users.map((contacto)=>{
          contacto.funComentario = comentario
        })
        const jsonObj = JSON.stringify(users)
        await AsyncStorage.setItem("users", jsonObj)

        this.setState({
          users: users,
          comentario: value
        })

    }catch(error){
        console.log(error)
    }
}


  agregarContactos = () => {
    getData(this.state.textHandler) 
    .then((usuarios)=> {
    usuarios = this.state.users.concat(usuarios)
    this.setState({users: usuarios})
      })
  }

  importarContactos(idTarjeta){
    
    //si tarjeta.id y idTarjeta son distintos (true) deja ese item, caso contrario, osea que tarjeta.id y idTarjeta sean iguales (false) sacame la tarjeta.
    let nuevoArray = this.state.users.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta
        
    });

    // Alert.alert("Datos actualizados", [{
    //   text: "Guardar en papelera y actualizar data",
    //   onPress: () => console.log("Cancel Pressed"),
    //   // onPress: () => this.papeleraStorage.bind(this)
    // }] )

    let tarjetaImportada = this.state.users.filter((tarjeta) => {
      return tarjeta.id === idTarjeta 
    });

    let tarjetasImportadas = this.state.importedUsers.concat(tarjetaImportada);

    this.setState({
      users: nuevoArray,
      importedUsers: tarjetasImportadas,
    })
  };

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
      onComentar = {this.funComentario.bind(this)}
      onImportar = {this.importarContactos.bind(this)}
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

  render () {
      return(
        
        <View style={styles.container}> 
        <ScrollView>

       <Header
        openDrawer = {this.props.navigation.openDrawer}
       /> 
       <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
          <Image style= {styles.burgerIcon} source= {require('@img/icono_sandwich.png')}/>
      </TouchableOpacity>
       <Text style={styles.navbarDetailsHome}></Text>

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
          
          <TouchableOpacity onPress={this.storeData.bind(this)}>
            <View>
                <Text style={styles.textoAbajo}>Guardar datos</Text>
            </View>
          </TouchableOpacity>
        </View>


      </ScrollView>
      </View>
       
      )
   }
}
