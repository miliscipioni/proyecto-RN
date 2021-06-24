import React, {Component} from 'react'; 
import {
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class DeleteUsers extends Component {
    constructor(){
        super();
        this.state ={
        }
      }
    render() {
        return (
            <View style= {styles.card}>
                <Image style={styles.cardImage} source={{uri: this.props.elemento.picture.large}}></Image>
                <View style= {styles.textCard}>
                    <Text style= {styles.principalText}>{this.props.elemento.name.first} {this.props.elemento.name.last} </Text>
                    <Text style={styles.secondaryText}>{this.props.elemento.email}</Text>
                    <Text style={styles.secondaryText}>{this.props.elemento.dob.date.substring(0,10)} ({this.props.elemento.dob.age} años)</Text>
                    <View style= {styles.buttons}>
                        <TouchableOpacity style= {styles.deleteBtn} onPress={this.props.onDelete.bind(this, this.props.elemento.id)}>
                            <Text style= {styles.textBtn}>Borrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style= {styles.recoverBtn} onPress={this.props.onRecover.bind(this, this.props.elemento.id)}>
                            <Text style= {styles.textBtn}>Restaurar</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: { 
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: "5%",
        marginBottom:"5%",
    }, 
    cardImage: {
        flex: 3,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textCard:{
        flex: 4,
    },
    principalText: {
        flex: 20,
        fontSize: 20,
        color: '#000000',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: "5%",
        fontWeight: 'bold',
        marginTop: "6%"
    },
    secondaryText: {
        flex: 1,
        paddingBottom: "5%",
        fontSize: 13,
        justifyContent: 'center',
        alignSelf: 'center',
    }, 
    buttons:{
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom:"10%",
        marginTop: "5%"
    },
    deleteBtn:{
        backgroundColor: "#C21E21" ,
        borderRadius: 5,
        width: "40%",
    },
    recoverBtn:{
        backgroundColor: "#F4BF00",
        borderRadius: 5,
        width: "40%",
    },
    textBtn:{
        color: "white",
        textAlign: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
        fontWeight: "bold"
    }
  });

export default DeleteUsers;
