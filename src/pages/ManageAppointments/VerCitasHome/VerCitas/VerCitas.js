
import React from 'react'
import { Input, Text } from '@rneui/themed'
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace, ButtonSecondary } from '../../../../components'
import { globalstyles } from '../../../../styled-components'
import { useVerCitas } from './useVerCitas'
import { AntDesign } from '@expo/vector-icons';
import { CardAppointment } from './components/CardAppointment/CardAppointment'
import { dateToString } from '../../../../utilities/date/dateToString'

export const VerCitas = ({ route, navigation }) => {

    Keyboard.dismiss(); // hidden keyboard

    const {
        showAppoints,
        goToVerResultados, verTodas,
        showDatepicker, date,
    } = useVerCitas({ route, navigation });

    const renderNotAppointments = () => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>No hay citas registradas</Text>
            <ButtonSecondary
                label='Regresar'
                funcOnPress={() => navigation.goBack()}
            />
        </View>
    )

    const renderAppointments = () => (
        <ScrollView style={[{ flex: 1 }]}>
            {
                showAppoints.map(
                    (appoint, index) =>
                        <CardAppointment
                            key={index}
                            appointment={appoint}
                            funcOnPress={() => goToVerResultados(appoint)}
                        />
                )
            }
        </ScrollView>
    )

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                <BoxSpace side={15} />
                <Text h3>Estas son tus citas</Text>
                <Text>Puedes filtrarlas por fecha</Text>

                <BoxSpace side={15} />

                <Input
                    // label={"Ingresa una fecha"}
                    // placeholder='Ingresa una fecha para tu cita'
                    inputStyle={{ fontSize: 14 }}
                    value={dateToString(date)}
                    onPressIn={() => showDatepicker()}
                    rightIcon={<AntDesign name="calendar" size={24} color="black" />}
                />

                <ButtonSecondary
                    label='Ver todas'
                    funcOnPress={() => verTodas()}
                />

                {
                    showAppoints.length === 0
                        ? renderNotAppointments()
                        : renderAppointments()
                }

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
