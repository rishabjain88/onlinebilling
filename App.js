import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import AdminLogin  from './pages/Admin';

export default class App extends React.Component {

  constructor()
  {
    super()
    this.state={
      productCount:0
    }
  }

  
 render() {
   return (
     <AdminLogin/>

  );
}



}
