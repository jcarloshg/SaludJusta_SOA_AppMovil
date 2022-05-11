
import React, { useContext, useEffect } from 'react'
import { Text, useTheme } from '@rneui/themed'
import { Alert, BackHandler, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { BoxSpace, ButtonSecondary } from '../../../components'
import { globalstyles } from '../../../styled-components';
import { ButtonAction } from './components/ButtonAction/ButtonAction';
import { DataContext } from '../../../contexts/DataProvider/DataProvider';
import User from '../../../models/entities/User.entitie';
import { useWecome } from './useWecome';

export const Wecome = ({ route, navigation }) => {

    const {
        theme,
        goToCreateAppointment,
        goToVerCitasHome,
        cerrarSesion
    } = useWecome({ route, navigation });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

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
                    funcNvidate={goToVerCitasHome}
                />

                <BoxSpace side={15} />
                <View style={globalstyles.bottom_element}>
                    <ButtonSecondary
                        label='Cerrar sesión'
                        funcOnPress={() => cerrarSesion()}
                    />
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
