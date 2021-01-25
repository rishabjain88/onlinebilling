import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Product from './Product';
import { SafeAreaView, StyleSheet,TouchableOpacity, Text, View ,Image, Button,Alert, TextInput} from 'react-native';
import {Component} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function AdminLogin() {
  const navigation = useNavigation();
  const pressHandler=() => {
    navigation.navigate("Product");
  
  }
  

  return (
     
    <View style={styles.container}>
    <View style={styles.bor}>
  <Text style={styles.header}>Login here</Text>
      
      <Text style={styles.lbl} >Employee Id</Text>
    

      <TextInput placeholder="Enter Your Username" style={styles.txt}
       ></TextInput>
    
      <Text style={styles.lbl}>Password</Text>
      <TextInput placeholder="Enter Your Password"style={styles.txt} secureTextEntry={true} ></TextInput>
      <TouchableOpacity style={styles.btn}>
       <Button title="LOGIN" onPress={pressHandler} style={{margin:10}}></Button>
       </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth:2,
    textAlign:'center',
    flex: 1,
    
    backgroundColor: '#192531',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color:"#fff",
    fontSize:25,
    marginBottom:20,
    borderWidth:1,
    borderRadius:12,
    borderColor:"#9CDCFE",
    padding:2,  
  },
  lbl:{
    color:"#fff",
    fontSize:18,
    flexDirection:"row",
  },
  txt: {
    
    height: 30,
    width :230,
    marginBottom:5,
    fontSize:18,
     color:"#fff",
      borderColor: 'gray',
      flexDirection:"row",
       borderWidth: 2,
       textAlign:'center',
       borderRadius:10,
       padding:5,
     
  },
  btn: {
    margin:10,
  },
  roww:{
    flex:0.5,
     flexDirection:"row"
    },

  bor:{
    borderWidth:1,
    borderRadius:15,
    padding:10,
    borderColor:"#2196F3",
    color:"#fff",
    // alignContent:'left',
  }
});
