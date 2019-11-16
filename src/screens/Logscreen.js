import React from 'react';
import { Text, StyleSheet,Image, View,Alert,TextInput ,Button,TouchableOpacity,KeyboardAvoidingView,StatusBar} from 'react-native';


const Logscreen = ({ navigation }) => {
 

    state = {
        emailText: ' ',
        passwordText: ' '
    }
    

    const onButtonPress = () => {
        Alert.alert('Logging in...!');
        navigation.navigate('profile')


    };
    const onButtonPress2 = () => {
        Alert.alert('Centers');
        navigation.navigate('Maps')
    };

    onSubmitEditing = () => {
        if (this.input === 'abc' || this.password === '123') {
        Alert.alert('Logging in...!');
    }
    else {
        Alert.alert('Error!');
    }
    }

    const greeting = 'MYC'
    return (
       
        <KeyboardAvoidingView
            behavior="padding" style={styles.container}
            keyboardShouldPersistTaps='always'
             style= {{ flex:1 }}  >
            <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor ="black" />
                <Text style={styles.subHeader}>{greeting}</Text>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('./img/dollar.png')}/>
                  
                </View>

    
                <TextInput style = {styles.input} 
                    autoCapitalize="none" 
                    selectionColor="#fff"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onSubmitEditing={(input)=> this.password.focus()}
                    autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Username' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                           returnKeyType="go" 
                    placeholder='Password' 
                    selectionColor="#fff"
                    secureTextEntry={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    ref={(input) => this.password = input}
                    placeholderTextColor='rgba(225,225,225,0.7)' />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={(onButtonPress)}>
                    <Text  style={styles.buttonText} >LOGIN</Text>
                </TouchableOpacity>
                <Text>Don't have an account?</Text>
                

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text  style={styles.buttonText} >Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2} onPress={(onButtonPress2)}>
                    <Text  style={styles.buttonText} >Our Locations</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.buttonContainer2} >
                    <Text  style={styles.buttonText} >Adebayo</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.buttonContainer2} >
                    <Text  style={styles.buttonText} >John</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.buttonContainer2} >
                    <Text  style={styles.buttonText} >Aqsa</Text>
                </TouchableOpacity>   
    </View>
        </KeyboardAvoidingView>
    );
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

export default Logscreen;