import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react'; 
import {getData} from '../src/api/RandomUsers';
import Card from '../src/components/Card';
import {Header} from '../src/components/Header';
import {
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity,
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
        </View>

     
       </View>
      )
   }
}
