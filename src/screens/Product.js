import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Component} from 'react';
import NewAdmin from './NewAdmin';
import { useNavigation } from '@react-navigation/native';


export default function Product() {
  const navigation = useNavigation();
  const [Barcode,setBarcode] = useState("")
  const [ProductName,setProductName] = useState("")
  const [Quantity,setQuantity] = useState("")
  const [ReorderQuantity,setReorderQuantity] = useState("")
  const [Price,setPrice] = useState("")

  const pressHandler=() => {
    navigation.navigate("NewAdmin");
  
  }
  const AddProduct=()=>{
    
    fetch("http://localhost:3000/AddProduct",{

    method:"POST",
      headers:{
        // 'Accept':'*/*',
        // 'Connection':'keep-alive',       
        //'Cors':'no-cors', 
        'Content-Type':'application/json'
      },  
        body:JSON.stringify({
        'Barcode': Barcode,  
        'ProductName':ProductName ,
        'Quantity': Quantity,
        'ReorderQuantity':ReorderQuantity ,
        'Price': Price
    })
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })   
    alert("Product "+ProductName +" is added Successfully!")
  }
const clear=()=>{
  setBarcode("")
  setProductName("")
  setQuantity("")
  setReorderQuantity("")
  setPrice("")
}
  const gotostock=() => {
    navigation.navigate("StockDetails");
  }

  const goback=() => {
    navigation.pop();
  
  }

  return (
        <View style={styles.container} >

<TouchableOpacity style={{marginLeft:1100}}>
         <Button title="Logout" onPress={goback}/>  
         </TouchableOpacity>
         <TouchableOpacity style={{marginLeft:1100}}>
         <Button title="Stock Details" onPress={gotostock}/>  
         </TouchableOpacity>



        <View style={styles.bor}>
       
          <Text style={styles.header}>Add new Product Details</Text>
          <Text style={styles.lbl}>Enter Barcode number</Text>
          <TextInput name="barcode" placeholder="Barcode No."
           value={Barcode} onChangeText={text=>setBarcode(text)}
           style={styles.txt}
         />
          <Text style={styles.lbl}>Enter Product name</Text>
          <TextInput name="proname" placeholder="Product Name"
     value={ProductName} onChangeText={text=>setProductName(text)}
          style={styles.txt}
         />
          <Text style={styles.lbl}>Enter Quantity</Text>
          <TextInput placeholder="In Pcs" name="qty"
     value={Quantity} onChangeText={text=>setQuantity(text)}
          style={styles.txt}
         />
        <Text style={styles.lbl}>Enter Reorder Quantity</Text>
          <TextInput placeholder="In Pcs" name="reorder"
     value={ReorderQuantity} onChangeText={text=>setReorderQuantity(text)}
          style={styles.txt}
         />
              <Text style={styles.lbl}>Enter Price</Text>
          <TextInput placeholder="Enter Price"  name="price"
     value={Price} onChangeText={text=>setPrice(text)}
          style={styles.txt}
          />
           
         
             <View style={styles.roww}>
         <TouchableOpacity style={styles.btn}>
         
         <Button title="Add Product" onPress={AddProduct}/>  
         
         </TouchableOpacity>
    
         <TouchableOpacity style={styles.btn}>
         <Button title="Clear" onPress={clear}/>  
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
         <Button title="Register New Employee" onPress={pressHandler}/>  
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
         <Button title="Update" onPress={pressHandler}/>  
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
      width :460,
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

