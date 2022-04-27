import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandPage, LandPage_OTRA } from './src/pages';
import { StatusBar, View } from 'react-native';
import { colors } from './src/styled-components';

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

	return (
		<>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} animated={true} />

			<NavigationContainer theme={theme}>
				<Stack.Navigator initialRouteName="LandPage">
					<Stack.Screen name="LandPage" component={LandPage} options={{ headerShown: false }} />
					<Stack.Screen name="LandPage_OTRA" component={LandPage_OTRA} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
