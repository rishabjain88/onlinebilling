import { StatusBar } from 'expo-status-bar';
import React,{delay,useState} from 'react';
import { StyleSheet,Button, Platform,Text, View ,TextInput,
   TouchableHighlight, 
  TouchableOpacity} from 'react-native';
import {Component} from 'react';
import NewAdmin from './NewAdmin';
import { useNavigation } from '@react-navigation/native';
import Table from 'react-native-simple-table';
import renderIf from 'render-if';


//   console.log("version number"+Platform.Version)
//   const navigation = useNavigation();
//   const pressHandler=() => {
//     navigation.navigate("Product");
  
//   }
  

// return(

//  <View style={styles.container}>
//  <View style={styles.border}>
//  <Text style={styles.header1}>Stock Details</Text>
//   <View style={styles.bor}>
//   <Text style={styles.header}>Barcode No.</Text>

//   <Text style={styles.header}>name </Text>
//   <Text style={styles.header}>Quantity </Text>
//   <Text style={styles.header}>Price </Text>
//   <Text style={styles.header}>Reorder qty </Text>
//   </View>
//   <View style={styles.bor}>
//   <Text style={styles.lbl}>9812831982 </Text>
//   <Text style={styles.lbl}>soap </Text>
//   <Text style={styles.lbl}>98 </Text>
//   <Text style={styles.lbl}>10 </Text>
//   <Text style={styles.lbl}>115 </Text>
//   </View>
//   <View style={styles.bor}>
//   <Text style={styles.lbl}>3234235235 </Text>
//   <Text style={styles.lbl}>Dettol</Text>
//   <Text style={styles.lbl}>3500 </Text>
//   <Text style={styles.lbl}>100 </Text>
//   <Text style={styles.lbl}>100 </Text>
//   </View>
//   </View>
// {/* ////////Reorder//////////////////////////// */}
//   <View style={styles.border2}>
//  <Text style={styles.header1}> Reorder</Text>
//   <View style={styles.bor}>
//   <Text style={styles.header}>Barcode No. </Text>
//   <Text style={styles.header}>name </Text>
//   <Text style={styles.header}>Quantity </Text>
//   <Text style={styles.header}>Price </Text>
//   <Text style={styles.header}>Reorder qty </Text>
//   </View>
//   <View style={styles.bor}>
//   <Text style={styles.lbl}>3234235235 </Text>
//   <Text style={styles.lbl}>soap </Text>
  
//   <Text style={styles.lbl}>98 </Text>
//   <Text style={styles.lbl}>10 </Text>
//   <Text style={styles.lbl}>115 </Text>
//   </View>
  
//   </View>

//   </View>
// );

// }


export default function StockDetails(sync) {
var dataSource=[];
const [flag, setflag] = useState(false)
const columns = [
  
  {
    title: 'id',
    dataIndex: '_id',
    width: 105
  },
  {
    title: 'Barcode No.',
    dataIndex: 'Barcode',
    width: 105
  },
  {
    title: 'ProductName',
    dataIndex: 'ProductName',
    width: 140
  },
  {
    title: 'Quantity',
    dataIndex: 'Quantity',
    width: 140
  },
  {
    title: 'ReorderQuantity',
    dataIndex: 'ReorderQuantity',
    width: 140
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    width: 140
  },
    {
    title: '__v',
    dataIndex: '__v',
    width: 140
  },
  
];
 

  
fetch("http://localhost:3000/product",{

  method:"POST",
  headers:{
   
    'Content-Type':'application/json'
  },  
    body:JSON.stringify({
    
    
   })
  
})
.then(res=>res.json())
.then((res)=>{
  //dataSource = Object.keys(res).map((key) => [Number(key), res[key]]);
  dataSource=res
   {/* dataSource = dataSource.replace(/"/g, "'"); */}
  alert("FIRST"+ dataSource)
  setflag(true)
})
//dataSource=[{'Barcode':'shubhanshu','ProductName':'shubha1234','Quantity':'sdf','ReorderQuantity':'sdf','Price':100},{'Barcode':'shubhanshu','ProductName':'shubha1234','Quantity':'sdf','ReorderQuantity':'sdf','Price':'100'},{'Barcode':'shubhanshu','ProductName':'shubha1234','Quantity':'sdf','ReorderQuantity':'sdf','Price':'100'}]
return (
    <View style={styles.container}>
      <Text style={styles.header}>Stock Details</Text>{
      renderIf(flag)(<Table height={320} columnWidth={60} columns={columns} dataSource={dataSource} />)}
    </View>
 );
}


const styles = StyleSheet.create({
  container: {
    
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        flex:1,
       flexDirection:'row'
        
      },
      default: {
        // other platforms, web for example
       flex:1,
      // flexDirection:'row '
      }
    }),
    
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
    flexDirection:"row"
  },
  header1:{
    color:"#fff",
    fontSize:35,
    marginBottom:20,
    borderWidth:1,
    borderRadius:12,
    borderColor:"#9CDCFE",
    padding:2,  
    flexDirection:"row"
  },
  lbl:{
    color:"#fff",
    fontSize:20,
    flexDirection:"row",
    marginHorizontal:25,
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
    border:{
      borderWidth:1,
      borderRadius:15,
      padding:10,
      borderColor:"#2196F3",
      marginTop:20,
      marginHorizontal:10,
    },
    border2:{
      borderWidth:1,
      borderRadius:15,
      padding:10,
      borderColor:"red",
      marginTop:20,
      marginHorizontal:10,

    },
  bor:{
//flex:1,
flexDirection:"row",
marginHorizontal:10,
  },
  bor2:{
flexDirection:"row",
  },
  Text:{
    marginLeft:10,
  }
});
