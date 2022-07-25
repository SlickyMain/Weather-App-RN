import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Temperature = ({ temp, feels_like, description }) => {

    const styles = StyleSheet.create({
        substrate: {
            backgroundColor: "white",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: "20%",
            paddingVertical: "5%",
            marginHorizontal: 10,
            marginTop: 15,
            width: "100%"
        },
        currentTemp: {
            fontSize: 32,
            fontWeight: '800',
            fontFamily: "Mukta-Regular",
            color: feels_like < -25 ? "#0C29EB" : feels_like < -10 ? "#0AAAF5" : feels_like > - 10 && feels_like < 10 ? "#1FAD56" : "#F5770A"
        },
        feelings: {
            fontSize: 18,
            color: "grey",
            fontFamily: "Mukta-Regular"
        },
        description: {
            color: "black",
            fontSize: 24,
            fontFamily: "Mukta-Regular"
        }
    })

    return (
        <View style={styles.substrate}>
            <Text style={styles.description}>{description[0].toUpperCase() + description.slice(1)}</Text>
            <Text style={styles.currentTemp}>{temp.toFixed(1)}°C</Text>
            <Text style={styles.feelings}>Feels like {feels_like.toFixed(1)}°C</Text>
        </View>
    )
}

export default Temperature
