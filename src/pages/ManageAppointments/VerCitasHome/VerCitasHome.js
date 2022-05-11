
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerCitas } from './VerCitas/VerCitas';
import { VerResultadosExamen } from './VerResultadosExamen/VerResultadosExamen';

const Stack = createNativeStackNavigator();

export const VerCitasHome = ({ route, navigation }) => {
    return (
        <Stack.Navigator initialRouteName="VerCitas">
            <Stack.Screen name="VerCitas" component={VerCitas} options={{ headerShown: false }} />
            <Stack.Screen name="VerResultadosExamen" component={VerResultadosExamen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
