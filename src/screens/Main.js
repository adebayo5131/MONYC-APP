import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    BackHandler
} from 'react-native'
import firebase from 'firebase'



export default class Main extends React.Component {
    state = {
        currentUser: null
    }

    componentDidMount() {
        const {
            currentUser
        } = firebase.auth()

        this.setState({
            currentUser
        })
    }

    render() {
        const {
            currentUser
        } = this.state

        return (
                <View style={styles.container}>
                <Text style={styles.textStyle}>
                Welcome! {currentUser && currentUser.email}!
                </Text>
                    
            
                    
                <View style={styles.loginContainer}>
                                <Image resizeMode="contain" style={styles.logo} source={require('./img/dollar.png')} />
                        
                            </View>
                
                    

                    <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.props.navigation.navigate('profile')}>
                                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: "black",
    },
    input: {
        width: 300,
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
        paddingHorizontal: 16,
        fontWeight: 'bold'

    },
    container: {
        backgroundColor: '#7FDBFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

        fontFamily: 'Verdana',

    },
    buttonContainer: {
        backgroundColor: '#7FDBFF',
        color: 'white',
        paddingVertical: 10,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonContainer2: {
        backgroundColor: '#44bd32',
        color: 'white',
        borderRadius: 25,

    },
    buttonText: {
        color: 'blue',
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