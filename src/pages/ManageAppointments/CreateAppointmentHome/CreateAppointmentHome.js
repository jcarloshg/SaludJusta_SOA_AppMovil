
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmPersonalData } from './ConfirmPersonalData/ConfirmPersonalData';
import { SelectExamType } from './SelectExamType/SelectExamType';
import { SelectDate } from './SelectDate/SelectDate';
import { ConfirmAppointment } from './ConfirmAppointment/ConfirmAppointment';

const Stack = createNativeStackNavigator();

export const CreateAppointmentHome = ({ route, navigation }) => {
    return (
        <Stack.Navigator initialRouteName="SelectExamType">
            <Stack.Screen name="ConfirmPersonalData" component={ConfirmPersonalData} options={{ headerShown: false }} />
            <Stack.Screen name="SelectExamType" component={SelectExamType} options={{ headerShown: false }} />
            <Stack.Screen name="SelectDate" component={SelectDate} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmAppointment" component={ConfirmAppointment} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
