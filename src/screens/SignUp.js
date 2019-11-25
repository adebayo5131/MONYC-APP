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
        .catch(error => this.setState({ errorMessage: error.message}))
    }

  render() {
    const greeting = 'MONYC';
    return (
      <KeyboardAvoidingView
      behavior="padding" style={styles.container}
      keyboardShouldPersistTaps='always'
      style={{ flex: 1 }} >
      <View style={styles.container}>
            <Text style={styles.subHeader}>{greeting}</Text>
        
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
            selectionColor="blue"
                underlineColorAndroid='#7f8fa6'
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            <TextInput
              secureTextEntry
              placeholder="Password"
            autoCapitalize="none"
            selectionColor="blue"
              style={styles.input}
              underlineColorAndroid='#7f8fa6'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />

                  <TouchableOpacity style={styles.buttonText}  onPress={this.handleSignUp} >
                                          <Text style={styles.buttonText} >Sign Up</Text>
                                  </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonText}  onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={styles.buttonText} > Already have an account? Login</Text>
                </TouchableOpacity>               
      
        </View>
        </KeyboardAvoidingView >
 
    )
  }
}
        
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'blue',
        borderWidth: 1,
        marginTop: 8
      },
     input:{
        width:300,
         borderRadius: 25,
        marginBottom: 15,
        padding: 10,
       color: 'black',
       borderColor: 'blue',
         backgroundColor: 'white',
         
    },
    subHeader: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 10,
        paddingHorizontal:16,
      fontWeight: 'bold',
      borderColor: 'blue',
    
    },
    container: {
        backgroundColor: '#7FDBFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        color:'black',
      fontFamily: 'Verdana',
      borderColor: 'blue',
        
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
        marginTop:10

    },
    logo: {
        position: 'relative',
        height: 300,
        width: 300
    }
 
})

export default SignUp;