import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { DataProvider, themeProvider } from './src/contexts';
import { HomeLandPage } from './src/pages/LandPage/HomeLandPage/HomeLandPage';
import { HomeAutenticate } from './src/pages/Authenticate/HomeAutenticate/HomeAutenticate';

const Stack = createNativeStackNavigator();

export default function App() {

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: '#EA5B13',
			background: '#FFF'
		},
	};

	const myTheme = themeProvider;

	return (
		<DataProvider>
			<ThemeProvider theme={myTheme}>
				<NavigationContainer theme={theme}>

					<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} animated={true} />

					<Stack.Navigator initialRouteName="HomeLandPage">
						<Stack.Screen name="HomeLandPage" component={HomeLandPage} options={{ headerShown: false }} />
						<Stack.Screen name="HomeAutenticate" component={HomeAutenticate} options={{ headerShown: false }} />
					</Stack.Navigator>

					<Toast />

				</NavigationContainer>
			</ThemeProvider>
		</DataProvider>
	);
}
