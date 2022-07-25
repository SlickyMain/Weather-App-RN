import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Heading = ({ title }) => {
    return (
        <View>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "500",
        color: "black",
        fontFamily: "Mukta-Regular"
    }
})