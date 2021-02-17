import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
// import NewAdmin from './pages/NewAdmin';
// import Product from './pages/Product';
// import Admin from './pages/Admin';
//import Navigator from './pages/homeStack';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navigator from './src/routes/navigator';


 
export default class App extends React.Component {

  
render(){
  return (  
    
    <Navigator/>
  );
}
}
