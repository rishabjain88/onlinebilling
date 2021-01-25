import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Component} from 'react';
import NewAdmin from './NewAdmin';
import { useNavigation } from '@react-navigation/native';


export default function StockDetails() {
  const navigation = useNavigation();
  const pressHandler=() => {
    navigation.navigate("Product");
  
  }
  

return(

 <View style={styles.container}>
 <View style={styles.border}>
 <Text style={styles.header1}>Stock Details and Reorder</Text>
  <View style={styles.bor}>
  <Text style={styles.header}>Barcode No.</Text>

  <Text style={styles.header}>name </Text>
  <Text style={styles.header}>Quantity </Text>
  <Text style={styles.header}>Price </Text>
  <Text style={styles.header}>Reorder qty </Text>
  </View>
  <View style={styles.bor}>
  <Text style={styles.lbl}>9812831982 </Text>
  <Text style={styles.lbl}>soap </Text>
  <Text style={styles.lbl}>98 </Text>
  <Text style={styles.lbl}>10 </Text>
  <Text style={styles.lbl}>115 </Text>
  </View>
  <View style={styles.bor}>
  <Text style={styles.lbl}>3234235235 </Text>
  <Text style={styles.lbl}>Dettol</Text>
  <Text style={styles.lbl}>3500 </Text>
  <Text style={styles.lbl}>100 </Text>
  <Text style={styles.lbl}>100 </Text>
  </View>
  </View>
{/* ////////Reorder//////////////////////////// */}
  <View style={styles.border2}>
 <Text style={styles.header1}> Reorder</Text>
  <View style={styles.bor}>
  <Text style={styles.header}>Barcode No. </Text>
  <Text style={styles.header}>name </Text>
  <Text style={styles.header}>Quantity </Text>
  <Text style={styles.header}>Price </Text>
  <Text style={styles.header}>Reorder qty </Text>
  </View>
  <View style={styles.bor}>
  <Text style={styles.lbl}>3234235235 </Text>
  <Text style={styles.lbl}>soap </Text>
  
  <Text style={styles.lbl}>98 </Text>
  <Text style={styles.lbl}>10 </Text>
  <Text style={styles.lbl}>115 </Text>
  </View>
  
  </View>

  </View>
);

}

const styles = StyleSheet.create({
  container: {
    
    borderWidth:2,
    textAlign:'center',
    flex: 1,
    flexDirection:"row",
    
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
