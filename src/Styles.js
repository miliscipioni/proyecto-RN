import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
container: {
    backgroundColor: '#010A43',
    height: '100%',
    width: '100%'
}, 
navbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C265C',
    width: '100%',
    height: '8%',
    
    
}, 
 navbarDetails: {
    color: '#05BC97',
    fontSize: 30, 
    margin: 15, 
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: "40%",
    right: 70
},
navbarDetailsAboutUs: {
    color: '#05BC97',
    fontSize: 30, 
    margin: 15, 
    fontWeight: 'bold',
    bottom: 60,
    marginLeft: "40%",
    left: -10,
},
navbarDetailsHome:{
    color: '#05BC97',
    fontSize: 30, 
    margin: 15, 
    fontWeight: 'bold',
    bottom: 70,
    marginLeft: "40%",
    left: -10,
},
navbarDetailsContactosImp: {
    color: '#05BC97',
    fontSize: 22, 
    margin: 15, 
    fontWeight: 'bold',
    bottom: 50,
    marginLeft: "40%",
    right: 60,
},

buscar: {
    color: '#05BC97',
    fontSize: 30, 
    margin: 10, 
    fontWeight: 'bold',
    marginTop: 80,
},

searchIcon: {
    position: 'absolute',
    display: 'flex',
    width: 65,
    height: 65,
    right: 15,
    top: 75,
}, 
burgerIcon: {
    position: 'absolute',
    display: 'flex',
    width: 70,
    height: 70, 
    marginLeft: 0,
    marginTop: -65,
},
/* binIcon: {
    position: 'absolute',
    display: 'flex',
    width: 65,
    height: 65,
    right: 60,
    top: 10,
}, */

flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}, 
principalText: {
    fontSize: 22,
    color: '#000000',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    fontWeight: 'bold',
},
card: { 
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 200,
    height: 280,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 15,
    position: 'relative',
}, 
cardImage: {
    width: 200,
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
    alignSelf: 'center',
},
secondaryText: {
    fontSize: 14,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
}, 
principalTextModal: {
    fontSize: 24,
    padding: 5,
    fontWeight: 'bold'

},
secondaryTextModal: {
    fontSize: 16,
    padding: 5,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginStart: 10,
}, 
detailsTitleModal: {
    fontWeight: 'bold',
    fontSize: 16,
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
    backgroundColor: 'rgba(0,0,0,0.2)', 
},
modal: {
    width: "100%",
    height: "90%",
    backgroundColor: "#FEF5E7",
    alignItems:'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 30,
    shadowColor: '#000000',

},
modalCloseBtn: {
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
},
btnModal : {
    position: 'absolute',
    bottom: 560, 
    left: 380,
},
modalCloseBtnContainer: {
    backgroundColor: '#6200E8',
    width: 20,
    height: 20,
    borderRadius: 15,

}, 
cardImageModal: {
    width: 210,
    height: 210,
    marginTop: 10,
    borderRadius: 10,
}, 
modalBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center'
}, 
btnComentar: {
    backgroundColor: '#6200E8',
    position: 'absolute', 
    right: 20,
    marginTop: 5,
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10, 
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    bottom: 10,
}, 

textoComentar:{
    backgroundColor: '#6200E8',
    position: 'absolute', 
    right: 20,
    marginTop: 5,
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10, 
    shadowColor: 'rgba(0, 0, 0, 0.8)',
},

btnBorrar: {
    backgroundColor: '#6200E8',
    left: 40,
    marginTop: 5,
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10, 
    shadowColor: 'rgba(0, 0, 0, 0.8)'
}, 
btnImportar: {
    backgroundColor: '#6200E8',
    position: 'absolute',
    width: 75,
    height: 20,
    left: 100,
    bottom: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20, 
    shadowColor: 'rgba(0, 0, 0, 0.8)'

},
modalBtnImportar: {
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center', 
    fontSize: 12,
},
cardAboutUs: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 300,
    height: 280,
    margin: 10,
    position: 'relative',
},
burguerButton: {
    width: 82,
    height: 82,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    top: 2, 
   
},
burguerText: {
    fontSize: 30,

}, 
burguerContainer: {
    position: 'absolute',
    left: 10,
    width: 100,
    height: 100,

},

burguerButtonPrueba: {
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
},
burguerTextPrueba: {
    fontSize: 30,
    color: 'white',
}, 
modalContainerImportedCards:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  

}, 
modalImportedCardsText: {
    color: '#FFFFFF',
    fontSize: 20,
    margin: 10, 
},
modalImportedCards: {
    backgroundColor: '#FF2E63', 
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    elevation: 20,
    shadowColor: '#FF3361',
}, 
closeButtonModalImportedCards: {
    color: '#FFFFFF',
    fontSize: 20,
    position: 'absolute',
    right: 20,
    top: 10,
}, 
InputCantUsuarios: {
    width: '100%', 
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white', 
    top: -55,
}, 

inputBusqueda:{
    width: '100%', 
    height: 40,
    width: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white',
    top: -60,
    marginLeft: 10,
    left: 40,
},

btnAgregarTarjetas: {
    fontSize: 16, 
    color: '#FFFFFF',
    justifyContent: 'center', 
    textAlign: 'center',
    fontWeight: 'bold', 

}, 
containerbtnAgregarTarjetas: {
    backgroundColor: '#FF2E63',
    width: '100%', 
    height: 30,
    borderRadius: 5,
    margin: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    top: -45,
}, 
textCantUsuarios: {
    color: '#05BC97',
    fontSize: 17,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 15,
    top: -60,

},





   
})


export {styles};