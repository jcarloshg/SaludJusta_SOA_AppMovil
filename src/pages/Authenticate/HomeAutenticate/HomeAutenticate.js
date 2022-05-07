
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { CrearCliente } from '../CrearCliente/CrearCliente'
import { CrearCuenta } from '../CrearCuenta/CrearCuenta';
import { Loggin } from '../Loggin/Loggin'
import { PageWelcome } from '../PageWelcome/PageWelcome';
import { AutenticateProvider } from './Context/AutenticateProvider';

const Stack = createNativeStackNavigator();

export const HomeAutenticate = () => {
	return (
		<AutenticateProvider>
			<Stack.Navigator initialRouteName="Loggin">
				<Stack.Screen name="CrearCliente" component={CrearCliente} options={{ headerShown: false }} />
				<Stack.Screen name="CrearCuenta" component={CrearCuenta} options={{ headerShown: false }} />
				<Stack.Screen name="PageWelcome" component={PageWelcome} options={{ headerShown: false }} />
				<Stack.Screen name="Loggin" component={Loggin} options={{ headerShown: false }} />
			</Stack.Navigator>
		</AutenticateProvider>
	)
}
