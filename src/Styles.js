import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
container: {
    backgroundColor: '#010A43',
    height: '100%',
    width: '100%'
}, 
navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C265C',
    width: '100%',
    height: '10%',
    
    
}, 
 navbarDetails: {
     display: 'flex',
    color: '#05BC97',
    fontSize: 30, 
    margin: 15, 
    fontWeight: 'bold'
},
imgNavbar: {
    position: 'absolute',
    display: 'flex',
    width: 40,
    height: 40,
}, 

flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}, 
principalText: {
    fontSize: 20,
    color: '#000000',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
},
card: { 
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 190,
    height: 280,
    margin: 10,
    position: 'relative',
}, 
cardImage: {
    width: 190,
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
    alignSelf: 'center',
},
secondaryText: {
    fontSize: 12,
    padding: 5,
}, 
btnDescripcion: {
    color: '#5E72E4',
    alignSelf: 'flex-start',
    paddingLeft: 5,
    fontWeight: 'bold',
},
btnMasBorde: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#5E72E4',
    width: 18,
    height: 18,
    borderRadius: 12,
    position: 'absolute',
    left: 60,
},
btnMas: {
    color: '#5E72E4',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 10,
},
moreContainer: {
  marginLeft: 2,
  marginTop: 5,  
},
modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
},

modal: {
    height: "70%",
    backgroundColor: "white",
    alignItems:'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

},
modalCloseBtn: {
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
},
btnModal : {
    position: 'absolute',
    bottom: 440, 
    left: 380,
},
modalCloseBtnContainer: {
    backgroundColor: '#6200E8',
    width: 20,
    height: 20,
    borderRadius: 15,
    
}



   
})


export {styles};