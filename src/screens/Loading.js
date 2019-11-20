import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
firebaseConfig = {
    apiKey: "use yours",
    authDomain: "use yours",
    databaseURL: "use yours",
    projectId: "monyc-app",
    storageBucket: "use yours",
    messagingSenderId: "use yours",
    appId: "use yours",
    measurementId: "use yours"
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
