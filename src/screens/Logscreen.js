import React from 'react';
import { Text, StyleSheet,Image, View,TextInput ,TouchableOpacity,KeyboardAvoidingView,StatusBar} from 'react-native';
import firebase from 'firebase'


export default class Logscreen extends React.Component {

  
    
    
    state = { email: '', password: '',username:'', errorMessage: null }

    handleLogin = () => {
      const { email, password,username} = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {

        const greeting = 'MYC';
    
        return (
       
            <KeyboardAvoidingView
                behavior="padding" style={styles.container}
                keyboardShouldPersistTaps='always'
                style={{ flex: 1 }}  >
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="black" />
                    <Text style={styles.subHeader}>{greeting}</Text>

                    <View style={styles.loginContainer}>
                        <Image resizeMode="contain" style={styles.logo} source={require('./img/dollar.png')} />
                  
                    </View>

                    {this.state.errorMessage &&
                        <Text style={{ color: 'black' }}>
                            {this.state.errorMessage}
                        </Text>}
    
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        selectionColor="#fff"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Username'
                        value={this.state.email || this.state.username}
                        placeholderTextColor='rgba(225,225,225,0.7)' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        placeholder='Password'
                        selectionColor="#fff"
                        secureTextEntry
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                      
                        placeholderTextColor='rgba(225,225,225,0.7)' />
                                        <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={this.handleLogin}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.props.navigation.navigate('signup')}>
                        <Text style={styles.buttonText} > <Text>Don't have an account? </Text>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.props.navigation.navigate('Maps')}>
                        <Text style={styles.buttonText} >Our Locations</Text>
                </TouchableOpacity>   
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
    
}
        
const styles = StyleSheet.create({
    textStyle: {
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9

        

    },
     input:{
        width:300,
         borderRadius: 25,
        marginBottom: 15,
        padding: 10,
         color: 'white',
         backgroundColor: 'green',
         
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
        color: '#fff',
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