import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
firebaseConfig = {
    apiKey: "AIzaSyBQ7h71mbFRZHj1nrYbuj-9fJy6cMcjysg",
    authDomain: "monyc-app.firebaseapp.com",
    databaseURL: "https://monyc-app.firebaseio.com",
    projectId: "monyc-app",
    storageBucket: "monyc-app.appspot.com",
    messagingSenderId: "680985210791",
    appId: "1:680985210791:web:f091baea7b1027a98ad082",
    measurementId: "G-LJ9TBVTHLY"
  };
        firebase.initializeApp(firebaseConfig);



export default class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'main' : 'login')
        })
      }

    render() {

    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})