import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ title, state }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.state}>{state}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        fontWeight: "400",
        color: "#474747"
    },
    state: {
        fontSize: 28, 
        fontWeight: "600",
        color: "black",
        fontFamily: "Mukta-Regular"
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 6,
        width: "100%"
    }
})