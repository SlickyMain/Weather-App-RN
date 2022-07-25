import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Heading from '../../components/Heading/Heading'
import Temperature from '../../components/Temperature/Temperature'
import Card from '../../components/Card/Card'
import Icon from 'react-native-vector-icons/AntDesign';

const MainScreen = ({ weatherObj }) => {

    const { main: { temp, feels_like, pressure, humidity }, visibility, wind: { speed, deg },
        sys: { country, sunrise, sunset }, name, weather, clouds: { all } } = weatherObj

    const description = weather[0].description
    const mainWeatherState = weather[0].main

    return (
        <LinearGradient colors={["#44C1DB", "white"]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <ScrollView>
                <View style={styles.headingContainer}>
                    <Heading title={`${name}, ${country}`} />
                    <Temperature temp={temp} feels_like={feels_like} description={description} />
                </View>
                <View style={styles.dataContainer}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Icon name='barschart' size={48} color="black" />
                        <Text style={{fontSize: 24, color: "black"}}> Conditions</Text>
                    </View>
                    <Card title="Pressure" state={pressure + " mB"} />
                    <Card title="Visibility" state={`${visibility / 1000} km`} />
                    <Card title="Humidity" state={`${humidity}%`} />
                    <Card title="Clouds" state={`${all}%`} />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    headingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 30,
        marginHorizontal: "10%"
    },
    dataContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "flex-start",
        marginHorizontal: "10%",
        flexWrap: "wrap",
    },
    linearGradient: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: "black",
        fontSize: 24,
        fontFamily: "Mukta-Bold",
        paddingHorizontal: 15,
        textAlign: "center"
    }
})