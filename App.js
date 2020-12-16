
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import db from "./config"
import firebase from "firebase";

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      hospitalId:"",
        longitude:null,
        latitude:null
      
    }
  }
  addNew=()=>{
    db.collection("hospital").add({
      name:this.state.name,
      position:{longitude:this.state.longitude,latitude:this.state.latitude},
      hospitalId:this.state.hospitalId
    })

    this.setState({
      name:"",
        longitude:null,
        latitude:null
      
    })
  }
render() {
  return (
    <View style={{backgroundColor:"#FED8B1"}}>
      <TextInput
        style={styles.input}
        placeholder="hospitalID e.g H001"
        onChangeText={(text) => {
          this.setState({ hospitalId: text });
        }}
        value={this.state.hospitalId}
      />

      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={(text) => {
          this.setState({ name: text });
        }}
        value={this.state.name}
      />

      <TextInput
        style={styles.input}
        placeholder="longitude"
        onChangeText={(text) => {
          this.setState({ longitude: text });
        }}
        value={this.state.longitude}
      />

<TextInput
        style={styles.input}
        placeholder="latitude"
        onChangeText={(text) => {
          this.setState({ latitude: text });
        }}
        value={this.state.latitude}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
this.addNew()        }}>
        <Text>add</Text>
      </TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
input: {
  backgroundColor: 'lightgreen',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  marginTop: 40,
  borderWidth: 3,
  width: 200,
  height: 50,
  padding:10
},
button: {
  backgroundColor: 'aqua',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  marginTop: 20,
  borderWidth: 2,
  width: 150,
  height: 50,
},

imageIcon: {
  width: "50%",
  height:"20%",
  justifyContent: 'center',
  alignItems:"center",
  alignSelf:"center",
  borderRadius: 10,
  marginTop:20
},
text1: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'blue',
  marginTop: 20,
  fontStyle: 'italic',

},

text2: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  color: 'red',
  marginTop: 20,
  fontStyle: 'italic',
},
text3: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  color: 'red',
  marginTop: 20,
  fontStyle: 'italic',
},
});

