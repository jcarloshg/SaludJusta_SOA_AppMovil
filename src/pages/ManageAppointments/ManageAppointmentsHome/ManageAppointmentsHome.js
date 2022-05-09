import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Wecome } from '../Welcome/Wecome';
import { TopBar } from '../../../components';

const Stack = createNativeStackNavigator();

export const ManageAppointmentsHome = ({ route, navigation }) => {
    return (
        <>
            <TopBar />
            <Stack.Navigator initialRouteName="Wecome">
                <Stack.Screen name="Wecome" component={Wecome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}
