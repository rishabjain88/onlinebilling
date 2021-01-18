import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Image, Button,Alert, TextInput} from 'react-native';
import {Component} from 'react';
const AdminLogin=() =>{
  
  return (
     
    <View style={styles.container}>
     <h1 >LOGIN HERE        </h1>
      
      <label style={{color:'black',fontSize:24,fontStyle:'normal'}} >Username</label>
    

      <TextInput placeholder="Enter Your Username" style={{fontSize:18,borderWidth:2,margin:10}}
       ></TextInput>
    
      <label style={{color:'black',fontSize:24,fontStyle:'normal'}}>Password</label>
      <TextInput placeholder="Enter Your Password"style={{fontSize:18,borderWidth:2,margin:10,}} secureTextEntry={true} ></TextInput>
       <Button  color="black" title="LOGIN" onPress={()=>alert("login sucessful")} style={{margin:10}}></Button>
      <StatusBar style="auto" />
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth:2,
    textAlign:'center',
    margin:"20%" ,
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AdminLogin;