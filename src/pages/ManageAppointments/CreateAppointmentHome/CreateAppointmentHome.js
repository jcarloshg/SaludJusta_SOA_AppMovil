
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmPersonalData } from './ConfirmPersonalData/ConfirmPersonalData';

const Stack = createNativeStackNavigator();

export const CreateAppointmentHome = ({ route, navigation }) => {
    return (
        <Stack.Navigator initialRouteName="ConfirmPersonalData">
            <Stack.Screen name="ConfirmPersonalData" component={ConfirmPersonalData} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
