import React from 'react';
import { Text, StyleSheet,Image, ActivityIndicator,View,TextInput ,TouchableOpacity,KeyboardAvoidingView,StatusBar} from 'react-native';
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

        const greeting = 'MoNYC';
    
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
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
    
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        selectionColor="blue"
                        underlineColorAndroid={'transparent'}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Username'
                        value={this.state.email || this.state.username}
                        placeholderTextColor='#7f8fa6' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        placeholder='Password'
                        selectionColor="blue"
                        secureTextEntry
                        underlineColorAndroid={'transparent'}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                      
                        placeholderTextColor='#7f8fa6' />
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
         borderColor: 'blue',
        padding: 10,
        color: 'black',
         backgroundColor: 'white',
         borderColor: 'blue',
         
    },
    subHeader: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 10,
        paddingHorizontal:16,
        fontWeight: 'bold'
    
    },
    container: {
        backgroundColor: '#7FDBFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        fontFamily: 'Verdana'
        
    },
    buttonContainer:{
        backgroundColor: '#7FDBFF',
        color: 'white',
        paddingVertical: 10,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        borderColor: 'blue',
    },
    buttonContainer2:{
        backgroundColor: '#7FDBFF',
        color: 'white',
        borderRadius: 25,
   
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        borderColor: 'blue',

    },
    logo: {
        position: 'relative',
        height: 300,
        width: 300
    }
 
})