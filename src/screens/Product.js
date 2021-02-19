import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Platform,StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Component} from 'react';
import NewAdmin from './NewAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useNavigation,useRoute } from '@react-navigation/native';
import renderIf from 'render-if';

export default function Product() {
  const navigation = useNavigation();
  const [flag,setFlag]=useState(false);
   const route= useRoute()
  const pressHandler=() => {
    navigation.navigate("NewAdmin");
  }
  const [Barcode,setBarcode] = useState("")
  const [ProductName,setProductName] = useState("")
  const [Quantity,setQuantity] = useState("")
  const [ReorderQuantity,setReorderQuantity] = useState("")
  const [Price,setPrice] = useState("")
 
  const validate=()=>{
    var letters = /^[A-Z a-z]+$/;
  if((!isNaN(Barcode)) && (Barcode!="") && (Barcode.length==12))
  {
   if((ProductName.match(letters)) && (ProductName!=""))
   {
     if((Quantity!="") && (!isNaN(Quantity)))
     {
       if(ReorderQuantity!="" && (!isNaN(ReorderQuantity)))
       {
         if((Price!="") && (!isNaN(Price)))
         {
           AddProduct()//this function will be called when all fields are validated.
         }
         else {setPrice("");alert("Enter Valid Price!")}
       }
       else{setReorderQuantity("");alert("Please enter valid ReorderQuantity!")}
     }else{setQuantity("");alert("Please enter a Valid Quantity!")}
   }else{setProductName("");alert("Please enter a valid Product Name!")}
  }else{setBarcode("");alert("Please enter a valid Barcode!")}
}


const validate2=()=>{
  var letters = /^[A-Z a-z]+$/;
if((!isNaN(Barcode)) && (Barcode!="") && (Barcode.length==12))
{
 if((ProductName.match(letters)) && (ProductName!=""))
 {
   if((Quantity!="") && (!isNaN(Quantity)))
   {
     if(ReorderQuantity!="" && (!isNaN(ReorderQuantity)))
     {
       if((Price!="") && (!isNaN(Price)))
       {
         UpdateProduct();//this function will be called when all fields are validated.
       }
       else {setPrice("");alert("Enter Valid Price!")}
     }
     else{setReorderQuantity("");alert("Please enter valid ReorderQuantity!")}
   }else{setQuantity("");alert("Please enter a Valid Quantity!")}
 }else{setProductName("");alert("Please enter a valid Product Name!")}
}else{setBarcode("");alert("Please enter a valid Barcode!")}
}
  const AddProduct=()=>{
    
    fetch("http://localhost:3000/AddProduct",{

    method:"POST",
      headers:{
       
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
      if(data.success==true)
      alert("This Product is already Added, You can now only update it.!");
    else
      alert("Product "+ProductName+" is Added successfully!");
    })   
   // alert("Product "+ProductName +" is added Successfully!")
  }


  const UpdateProduct=()=>{
    
    fetch("http://localhost:3000/UpdateProduct",{

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
    .then(data=>data.json())
    .then(data=>{
      if(data.success==false)
      alert("Product not found!, Add Before Updating!");
    else
    alert("Product "+ProductName +" is Updated Successfully!");
    })   
    
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
        <View style={styles.roww}>


<Text style={styles.head}>Welcome {route.params.Name}</Text>
<View style={styles.coll}>

<TouchableOpacity style={styles.btnleft}>
         <Button title="Logout" onPress={goback}>
         </Button>  
         </TouchableOpacity>
         <TouchableOpacity style={styles.btnleft}>
         <Button title="Stock Details" onPress={gotostock}/>  
         </TouchableOpacity>
         </View>
</View>
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
           <View style={styles.btns}>
         
             <View style={styles.roww}>
         <TouchableOpacity style={styles.btn}>
         
         <Button title="Add Product" onPress={validate}/>  
         
         </TouchableOpacity>
    
         <TouchableOpacity style={styles.btn}>
         <Button title="Clear" onPress={clear}/>  
         </TouchableOpacity>
         </View>
         <View style={styles.roww}>

{
         renderIf(route.params.role==='SuperAdmin')(<TouchableOpacity style={styles.btn}>

         <Button title="Add Employee" onPress={pressHandler}/>  
         </TouchableOpacity>)

}
         <TouchableOpacity style={styles.btn}>
         <Button title="Update" onPress={validate2}/>  
         </TouchableOpacity>
        </View>
       
        

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
    coll:{
      flexDirection:'column',
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
      
    },btnleft:{
      ...Platform.select({
        ios: {
          backgroundColor: 'red'
        },
        android: {
          marginLeft:262,
          marginBottom:5,
          width:120,
          
        },
        default: {
          // other platforms, web for example
         marginLeft:950,
         marginBottom:5,
         marginRight:5,
         width:120
        }
      })
    },
    head:{
      color:"#fff",
      fontSize:20,
      borderWidth:1,
      borderRadius:5,
      borderColor:"#9CDCFE",
      width:'100%',
      paddingTop:8,
      paddingLeft:5
    },
   
    txt: {
      
      height: 30,
      ...Platform.select({
        ios: {
          width:340
        },
        android: {
         width:350
          
        },
        default: {
          // other platforms, web for example
         width:480
        }
      }),
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
      ...Platform.select({
        ios: {
          margin:5,
      width:10,
      height:30
        },
        android: {
         
          margin:5,
      width:170,
      height:30,
      padding:0,
        },
        default: {
         width:225,
         margin:5
         
        }
      }),
      
    },
    btns:{
     alignItems:'center', 
    },
    roww:{
     // alignItem:'center',
    
       flexDirection:"row"
      },
      bor:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        borderColor:"#2196F3",
        justifyContent:'center'
      }
      
  });

