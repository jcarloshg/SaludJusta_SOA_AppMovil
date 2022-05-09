import { Text, useTheme } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components';
import { ButtonAction } from './components/ButtonAction/ButtonAction';

export const Wecome = ({ route, navigation }) => {

    const { theme } = useTheme();

    const goToCreateAppointment = () => navigation.navigate('CreateAppointmentHome');

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_flex]}>

                    <BoxSpace side={15} />
                    <Text h3>Bienvenido</Text>
                    <Text>¿Qué es lo que deaseas hacer?</Text>

                    <BoxSpace side={15} />
                    <ButtonAction
                        label='Deseo generar una nueva cita'
                        nameIcon='addfile'
                        funcNvidate={goToCreateAppointment}
                    />
                    <ButtonAction
                        label='Ver mis citas'
                        nameIcon='calendar'
                    />

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
