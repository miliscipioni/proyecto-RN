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
}


   
})


export {styles};