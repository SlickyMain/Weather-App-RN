import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	PermissionsAndroid
} from 'react-native';
import Loader from './src/views/Loader/Loader';
import MainScreen from './src/views/MainScreen/MainScreen';
import Geo from "react-native-geolocation-service"
import { WEATHER_API_KEY } from "./src/constants"
import axios from 'axios';

const App = () => {

	const [isLoading, setIsLoading] = useState(true)
	const [isGranted, setIsGranted] = useState(false)
	const [error, setError] = useState("")
	const [location, setLocation] = useState([])
	const [weatherData, setWeatherData] = useState([])

	useEffect(() => {
		const getCoords = async () => {
			try {
				const geoGranted = await PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION")
				if (geoGranted) {
					Geo.getCurrentPosition(position => {
						setLocation([position.coords.latitude, position.coords.longitude])
					},
						err => { console.log(err); setError(err.message) },
						{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })
				}
				else {
					PermissionsAndroid.request(
						"android.permission.ACCESS_FINE_LOCATION", {
						title: "Get us know your location",
						message: "We gonna show weather for exactly your place",
						buttonPositive: "Ok",
						buttonNeutral: "Ask me later",
						buttonNegative: "Cancel"
					}
					)
					.then(res => {
						res === "granted" ? setIsGranted(true) : setError("We need access to your geolocation")
					})
				}
			} catch (error) {
				console.log(error.message)
			}
		}
		getCoords()
	}, [isGranted])

	useEffect(() => {
		const getWeather = async () => {
			return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${WEATHER_API_KEY}&units=metric`)
		}
		if (location && location.length) {
			getWeather()
				.then(res => {
					setWeatherData(res.data)
					setIsLoading(false)
				})
				.catch(err => console.log(err.message + " ERROR"))
		}
	}, [location.length, location])

	return (
		<SafeAreaView>
			<StatusBar barStyle={'light-content'} />
			{
				isLoading && <Loader error={error} />
			}
			{
				!isLoading && <MainScreen weatherObj={weatherData} />
			}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default App;
