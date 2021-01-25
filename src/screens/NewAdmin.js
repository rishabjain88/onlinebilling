import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Component} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function NewAdmin() {
  const navigation = useNavigation();
  const goback=() => {
    navigation.pop();
  
  }
  

  return (
        <View style={styles.container} >
        <View style={styles.bor}>
          <Text style={styles.header}>Register a New Employee</Text>
          <Text style={styles.lbl}>Enter Full Name</Text>
          <TextInput name="fullname" placeholder="Full Name"
    
          style={styles.txt}
         />
          <Text style={styles.lbl}>Enter Employee ID</Text>
          <TextInput placeholder="Employee ID" name="empid"
    
          style={styles.txt}
         />
        
              <Text style={styles.lbl}>Enter Password</Text>
          <TextInput placeholder="enter password"  name="pass"
    
          style={styles.txt}
          secureTextEntry={true}
         />
                   <Text style={styles.lbl}>Re-Enter Password</Text>
          <TextInput secureTextEntry={true} name="repass" placeholder="Re-enter password"
    
          style={styles.txt}
         />
             <View style={styles.roww}>
         <TouchableOpacity style={styles.btn}>
         
         <Button title="Create New User"/>  
         
         </TouchableOpacity>
    
         <TouchableOpacity style={styles.btn}>
         <Button title="Cancel" onPress={goback}/>  
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
      marginBottom:20,
      borderWidth:1,
      borderRadius:12,
      borderColor:"#9CDCFE",
      padding:2,  
      textAlign:'center',
    },
    lbl:{
      color:"#fff",
      fontSize:18,
      flexDirection:"row",

    },
    txt: {
      
      height: 30,
      width :300,
      fontSize:18,
       color:"#fff",
        borderColor: 'gray',
        flexDirection:"row",
         borderWidth: 2,
         textAlign:'left',
         borderRadius:10,
         padding:5,
         marginBottom:5,
       
    },
    btn: {
      margin:5,
    },
    roww:{
     
       flexDirection:"row"
      },
      bor:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        borderColor:"#2196F3",
        marginBottom:10,
        
      }
      
  });
  

