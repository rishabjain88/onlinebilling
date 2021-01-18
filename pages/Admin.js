import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity,Image} from 'react-native';
import {Component} from 'react';
const Admin=() => {
    
  return (
        <View style={styles.container} >
        <View style={styles.bor}>
          
          <Text style={styles.header}>LOGIN HERE</Text>
          <Text style={styles.lbl}>Enter UserName</Text>
          <TextInput name="user" placeholder="UserName"
    
          style={styles.txt}
         />
      
    
   
              <Text style={styles.lbl}>Enter Password</Text>
          <TextInput placeholder="Enter Password"  name="pass"
    
          style={styles.txt}
          secureTextEntry={true}
         />
                  
    
             <View style={styles.roww}>
         <TouchableOpacity style={styles.btn} >
         
         <Button title="Login "   / >  
         
         </TouchableOpacity>
    
         
        </View>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#192531',
      alignItems: 'center',
      
      justifyContent: 'center',
    },
    header:{
      color:"#fff",
      fontSize:25,
      marginBottom:10,
      borderWidth:1,
      borderRadius:12,
      borderColor:"#2196F3",
      padding:2,  
    },
    lbl:{
      color:"#fff",
      fontSize:18,
      flexDirection:"row",
      margin:5
    },
    txt: {
      
      height: 30,
      width :"100%",
      fontSize:18,
       color:"#fff",
        borderColor: '#2196F3',
        flexDirection:"row",
         borderWidth: 2,
         textAlign:'left',
         borderRadius:10,
         padding:5,
       
    },
    btn: {
      margin:10,
     
    
    },
    roww:{
      flex:0,
       flexDirection:"row"
      
      },
      bor:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        borderColor:"#2196F3",
      }
      
  });

export default Admin;
