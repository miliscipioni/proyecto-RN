import React, {Component} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from  '../api/RandomUsers';
import {
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Animated
} from 'react-native';
import {styles} from '../Styles';

export class Header extends Component {

  animation = new Animated.Value(0.6)

  spring = ()=>{
    Animated.spring(this.animation,{
      toValue: 1.3,
      friction: 0.5,
      useNativeDriver: false
    }).start()
  }

    render() {
        return (
          <View styles={styles.container}> 
  
            <View style={styles.flatlistContainer}> 
              <TouchableOpacity onPress= { () => this.props.openDrawer()}>             
                  <Text style={{margin: 30}}></Text>
                  {/* <Image style={styles.burguerIcon} source= {require('@img/icono_sandwich.png')}></Image> */}            
              </TouchableOpacity>
            </View> 

            <View style={styles.flatlistContainer}> 
            <TouchableOpacity style={styles.animationBoton} onPress= {this.spring.bind(this)}>
                <Text style={{fontSize: 16, color: '#FFFFFF', justifyContent: 'center', textAlign: 'center'}} >
                  ANIMATION 
                </Text>
            </TouchableOpacity>

            <Animated.Text style={{color: '#05BC97',
                          fontSize: 40, 
                          fontWeight: 'bold',
                          alignItems: "center",
                          transform:[{scale:this.animation}] }}>Home
            </Animated.Text>
            </View> 
           
             
          </View> 
        )
    }
}