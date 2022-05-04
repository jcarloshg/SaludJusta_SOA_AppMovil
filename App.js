import React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { TopBar } from './src/components';
import { ThemeProvider } from '@rneui/themed';
import { themeProvider } from './src/contexts';
import { HomeLandPage } from './src/pages/LandPage/HomeLandPage/HomeLandPage';

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
		<ThemeProvider theme={myTheme}>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} animated={true} />

			<TopBar />

			<HomeLandPage />

			{/* <NavigationContainer theme={theme}>
				<Stack.Navigator initialRouteName="LandPage">
					<Stack.Screen name="LandPage" component={LandPage} options={{ headerShown: false }} />
					<Stack.Screen name="LandPage_OTRA" component={LandPage_OTRA} />
				</Stack.Navigator>
			</NavigationContainer> */}
		</ThemeProvider>
	);
}
