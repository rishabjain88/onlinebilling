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
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

var dataSource=[];
export default function StockDetails() {

let header=[];
const [flag, setflag] = useState(false)
const columns = [
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
  
  // //dataSource = Object.keys(res).map((key) => [Number(key), res[key]]);
  // res.forEach(obj => {
   
  //   Object.entries(obj).forEach(key => header.includes(key) || header.push(key))
  //   //Object.entries(obj).forEach(header.includes(":") || header.push(":"))
  //   Object.entries(obj).forEach(value => header.includes(value) || header.push(value))
  //   let thisRow = new Array(header.length);
  //   header.forEach((col, i) => thisRow[i] = obj[col] || '')
  //   dataSource.push(thisRow);
  // })
  // res=JSON.stringify(res);
  // var obj = [res]; 
          
              
     for(var i in res) 
        dataSource.push({'Barcode':res[i].Barcode,'ProductName':res[i].ProductName,'Quantity':res[i].Quantity,'ReorderQuantity':res[i].ReorderQuantity,'Price':res[i].Price})
  // dataSource.unshift(header);
   {/* dataSource = dataSource.replace(/"/g, "'"); */}
  
  setflag(true)
})


return (
    <View style={styles.container}>
     {
      renderIf(flag)( <><Text style={styles.header}>Stock Details</Text><Table height={320} columnWidth={60} columns={columns} dataSource={dataSource} /></>)}
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
