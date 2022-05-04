
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandPage_OTRA } from '../LandPage/LandPage_OTRA';
import { LandPage } from '../LandPage/LandPage';

const Stack = createNativeStackNavigator();

export const HomeLandPage = () => {

    return (
        <Stack.Navigator initialRouteName="LandPage">
            <Stack.Screen name="LandPage" component={LandPage} options={{ headerShown: false }} />
            <Stack.Screen name="LandPage_OTRA" component={LandPage_OTRA} />
        </Stack.Navigator>
    )
}
