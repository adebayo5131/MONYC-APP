import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "Include Yours",
  authDomain: "Include Yours",
  databaseURL: "Include Yours",
  projectId: "Include Yours",
  storageBucket: "Include Yours",
  messagingSenderId: "Include Yours",
  appId: "Include Yours",
  measurementId: "Include Yours"
};
// Initialize Firebase
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
