
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerCitas } from './VerCitas/VerCitas';

const Stack = createNativeStackNavigator();

export const VerCitasHome = ({ route, navigation }) => {
    return (
        <Stack.Navigator initialRouteName="VerCitas">
            <Stack.Screen name="VerCitas" component={VerCitas} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
