
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class App extends React.Component{
render() {
  return (
    <View style={{backgroundColor:"#FED8B1"}}>
     {this.showModal()}
      <Image
        style={styles.imageIcon}
        source={require('../assets/AnimationBandeauHaut_6E2BDD7_FR.gif')}
      />
      <Text style={styles.text1}>Enter Your Email And Password To Login</Text>
      <Text style={styles.text3}>(OR)</Text>

      <Text style={styles.text2}>
        If You Are New User Then Type Email And Password Then Click On SignUp
      </Text>
      <TextInput
                keyboardType={"email-address"}

        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => {
          this.setState({ emailId: text });
        }}
        value={this.state.emailId}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          this.setState({ password: text });
        }}
        value={this.state.password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.userLogin(this.state.emailId, this.state.password);
        }}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.setState({ isModalVisible: true });

          
        }}>
        <Text>Signup</Text>
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

