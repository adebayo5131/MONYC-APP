import React from 'react';
import { Text, StyleSheet,Image, View,Alert,TextInput ,Button,TouchableOpacity,KeyboardAvoidingView,StatusBar} from 'react-native';
import firebase from 'firebase'
 class SignUp extends React.Component {
    state = { email: '', password: '',errorMessage:null }

    handleSignUp = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('login'))
        .catch(error => this.setState({ errorMessage: "Enter a valide email and password"}))
    }
  
  render() {
    return (
      <View style={styles.container}>

              <View style={styles.loginContainer}>
                        <Image resizeMode="contain" style={styles.logo} source={require('./img/dollar.png')} />
                  
                </View>

        {this.state.errorMessage &&
          <Text style={{ color: 'b' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <Button style={styles.buttonText} title="Sign Up" onPress={this.handleSignUp} />
        <Button style={styles.buttonText} 
          title = "Already have an account? Login"
          onPress={() => this.props.navigation.navigate('login')}
        />
      </View>
    )
  }
}
        
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
      },
    
     input:{
        width:300,
         borderRadius: 25,
        marginBottom: 15,
        padding: 10,
         color: 'black',
         backgroundColor: 'white',
         
    },
    subHeader: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 10,
        paddingHorizontal:16,
        fontWeight: 'bold'
    
    },
    container: {
        backgroundColor: '#44bd32',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        color:'white',
        fontFamily: 'Verdana',
        
    },
    buttonContainer:{
        backgroundColor: '#44bd32',
        color: 'white',
        paddingVertical: 10,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonContainer2:{
        backgroundColor: '#44bd32',
        color: 'white',
        borderRadius: 25,
   
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,

    },
    logo: {
        position: 'relative',
        height: 300,
        width: 300
    }
 
})

export default SignUp;