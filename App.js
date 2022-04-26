import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandPage, LandPage_OTRA } from './src/pages';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} animated={true} />

			<NavigationContainer>
				<Stack.Navigator initialRouteName="LandPage">
					<Stack.Screen name="LandPage" component={LandPage} options={{ headerShown: false }} />
					<Stack.Screen name="LandPage_OTRA" component={LandPage_OTRA} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
		// <View style={styles.container}>
		//   <Text>Open up App.js to start working on your app!</Text>
		//   <Text>HOLA MI PANA</Text>
		//   <StatusBar style="auto" />
		// </View>
	);
}
