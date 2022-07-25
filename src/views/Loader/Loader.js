import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Loader = ({ error }) => {

    return (
        <LinearGradient colors={["#44C1DB", "white"]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={styles.text}>{error || "Connecting with our personal meteo shaman..."}</Text>
        </LinearGradient>
    )
}

export default Loader

const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "black",
        fontSize: 24,
        fontFamily: "Mukta-Bold",
        paddingHorizontal: 15,
        textAlign: "center"
    }
})