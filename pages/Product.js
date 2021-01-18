import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Component} from 'react';
const Product=() => {
    
  return (
        <View style={styles.container} >
        <View style={styles.bor}>
          <Text style={styles.header}>Add new Product Details</Text>
          <Text style={styles.lbl}>Enter Product name</Text>
          <TextInput name="proname" placeholder="Product Name"
    
          style={styles.txt}
         />
          <Text style={styles.lbl}>Enter Quantity</Text>
          <TextInput placeholder="In Pcs" name="empid"
    
          style={styles.txt}
         />
        
              <Text style={styles.lbl}>Enter Price</Text>
          <TextInput placeholder="Enter Price"  name="price"
    
          style={styles.txt}
          />
                   <Text style={styles.lbl}>Enter Barcode number</Text>
          <TextInput name="barcode" placeholder="Barcode No."
    
          style={styles.txt}
         />
             <View style={styles.roww}>
         <TouchableOpacity style={styles.btn}>
         
         <Button title="Add Product"/>  
         
         </TouchableOpacity>
    
         <TouchableOpacity style={styles.btn}>
         <Button title="Clear"/>  
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
       
    },
    btn: {
      margin:5,
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
      }
      
  });
  

export default Product;
