import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Heading = ({ title, suggest, currentTopColor }) => {

    const [themeColor, setThemeColor] = useState("#000")

    const invertColor = (color) => {
        return (parseInt(color, 16) ^ 0xFFFFFF | 0x1000000).toString(16).substring(1)
    }

    useEffect(() => {
        const newColor = invertColor(currentTopColor.slice(1))
        setThemeColor(newColor)
    }, [currentTopColor])

    const styles = StyleSheet.create({
        heading: {
            fontSize: 28,
            fontWeight: "500",
            color: "black",
            fontFamily: "Mukta-Bold"
        },
        suggestion: {
            fontSize: 20,
            color: "black",
            fontFamily: "Mukta-Light",
            textAlign: "center",
            backgroundColor: "#F6F6F6",
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingVertical: 1
        },
        container: {
            alignItems: "center",
            justifyContent: "center"
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.suggestion}>{suggest}</Text>
        </View>
    )

}

export default Heading
