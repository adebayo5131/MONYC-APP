import React, {
    Component
} from 'react'
import {
    TextInput,
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity
} from 'react-native'
import Svg, {
    Ellipse
} from "react-native-svg"

import firebase from 'firebase'

class ProfileScreen extends React.Component {
    constructor({
        navigation
    }) {
        super()
        onButtonPress = () => {

            navigation.navigate('Maps')


        };
        this.state = {
            counter: 0,
            bottleCount: 0,
            codes: ["JOHN8", "ADEBAYO4", "ANTHONY1", "AQYA6", "ZAHRA3", "FAJER9"],
            text: ""
        }
        this.handleChange = this.handleChange.bind(this)

    }


    handleChange() {

       

        if (this.state.codes.includes(this.state.text)) {
            const num = this.state.text[this.state.text.length - 1]
            this.setState(prevState => {
                return {
                    counter: Math.round(prevState.counter * 100 + 7 * num) / 100,
                    codes: prevState.codes.filter((value) => {
                        return value != this.state.text
                    }),
                }
            })
            this.setState(prevState => {
                return {
                    bottleCount: prevState.bottleCount + parseInt(num, 10),
                }
            })

            
        }

    }
    handleSignOut = () => {
        firebase.auth().signOut().then(() => this.props.navigation.navigate('signup'))
        
      }


    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                <Text onPress={this.handleSignOut}>Logout</Text>
                </TouchableOpacity>
                            
                 
    <TouchableOpacity style ={styles.button3} onPress={(onButtonPress)}><Text >Recycle Centers</Text></TouchableOpacity>
            <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 306.26 319.74" style={styles.ellipse}>
                <Ellipse
                    strokeWidth={1}
                    fill="rgba(360, 360, 360, 1)"
                    stroke="rgba(230, 230, 230,1)"
                    cx={153}
                    cy={160}
                    rx={153}
                    ry={159}
                />
                </Svg>
                <Text style={styles.loremIpsum}>{this.state.counter}</Text>
            </View>
            <TextInput placeholder="Write Code Here" style={styles.textInput} value={this.state.text} onChangeText={text => this.setState({text})} />
            <TouchableOpacity
                onPress={this.handleChange}
                style={styles.button}>
                <Text style={styles.monyc}>Monyc!</Text>
            </TouchableOpacity>
                <View style={styles.loremIpsum4Row}>
                    <Text style={styles.loremIpsum4}>Bottles{"\n"}{this.state.bottleCount}</Text>
                    <TouchableOpacity style={styles.button2} ><Text style={styles.monyc}>Transfer</Text></TouchableOpacity>
        </View>
 </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#44bd32',

    },
    monyc: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center",
        position: 'relative',
        padding: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,


    },
    loremIpsum2: {
        width: 191,
        height: 72,
        color: "rgba(187,80,24,1)",
        fontSize: 50,
        //fontFamily: "impact-regular",
        //   lineHeight:35,
        //   letterSpacing: 2,
        textAlign: "center",
        marginTop: 45,
        marginLeft: 110
    },
    ellipse: {
        top: 0,
        left: 0,
        width: 306,
        height: 320,
        position: "absolute"
    },
    loremIpsum: {
        top: 105,
        left: 50,
        width: 206,
        height: 199,
        color: "#121212",
        position: "absolute",
        fontSize: 80,
        //fontFamily: "impact-regular",
        //   lineHeight: 60,
        //   letterSpacing: 1,
        textAlign: "center"
    },
    ellipseStack: {
        width: 306,
        height: 320,
        marginTop: 40,
        marginLeft: 50
    },
    textInput: {
        width: 177,
        height: 79,
        backgroundColor: "white",
        color: "rgba(0,0,0,1)",
        borderRadius: 13,
        borderColor: "rgba(155,155,155,1)",
        borderWidth: 4,
        //fontFamily: "arial-regular",
        textAlign: "center",
        marginTop: 28,
        marginLeft: 120
    },
    button: {
        width: 80,
        height: 35,
        backgroundColor: 'green',
        borderRadius: 7,
        color: 'white',
        borderWidth: 0,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.28,
        marginTop: 18,
        alignSelf: "center"
    },
    loremIpsum4: {
        width: 80,
        height: 84,
        color: "#121212",
        fontSize: 25,
        //fontFamily: "impact-regular",
        //   lineHeight: 35,
        //   letterSpacing: ,
        textAlign: "center"


    },
    button2: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,

        borderRadius: 30,
        width: 150,
        marginTop: 20,
        height: 50,

        marginLeft: 147,
        marginTop: 5
    },
    loremIpsum4Row: {
        height: 84,
        flexDirection: "row",
        marginTop: 13,
        marginLeft: 37,
        marginRight: 28
    },
    button3: {
        // width: 101,
        // height: 47,
        // backgroundColor: "rgba(175,93,16,0)",
        // borderRadius: 16,
        // borderColor: "rgba(203,97,12,0)",
        // borderWidth: 5,
        // marginLeft: 300,
        // marginBottom: -525
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        marginLeft: 136,
        marginTop: 600,
        padding: 10,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        width: 150,
        height: 35,
        backgroundColor: 'green',
        borderRadius: 7,
        color: 'white',
        borderWidth: 0,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.28,



    },
})

export default ProfileScreen;