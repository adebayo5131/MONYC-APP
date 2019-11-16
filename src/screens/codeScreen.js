import React from 'react';
import { Text, StyleSheet, View,FlatList } from 'react-native';

const CodeScreen = () => {
    const codes = [
        { ref: 'AAA'},
        { ref: 'BBB' },
        { ref: 'CCC' },
        { ref: 'DDD' },
        { ref: 'EEE' },
        { ref: 'FFF' },
        { ref: 'JJJ' },
        { ref: 'KKK' },
        { ref: 'LLL' },
     
    ]
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(code) =>code.ref}
            data={codes}
            renderItem={({item}) => { 

                return <Text style={styles.textStyle}>{item.ref}</Text>
            }}/>
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default CodeScreen;