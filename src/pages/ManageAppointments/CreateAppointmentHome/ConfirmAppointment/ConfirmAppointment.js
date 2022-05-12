import { Button, Card, Divider, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../../components'
import { colors, globalstyles } from '../../../../styled-components'
import { dateToString } from '../../../../utilities/date/dateToString'
import { hhmmssToString } from '../../../../utilities/date/hhmmssToString'
import { timeToString } from '../../../../utilities/date/timeToString'
import { useConfirmAppointment } from './useConfirmAppointment'

export const ConfirmAppointment = ({ route, navigation }) => {

    const {
        examCatalogItem,
        appointment,
        userClient,
        confirmar,
        isLoading,
    } = useConfirmAppointment({ route, navigation });

    const rederData = (label, data) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text h4 h4Style={{ fontSize: 14, flex: 2 }}>{label}</Text>
                <BoxSpace side={25} border={false} />
                <Text style={{ flex: 4 }}>{data}</Text>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <SafeAreaView style={[globalstyles.container_bottom_TopBar, { alignItems: 'center' }]}>

                <BoxSpace side={15} />
                <Text h3>Confirma tu cita</Text>
                <Text>Estos son los datos de tu cita</Text>

                <BoxSpace side={15} />

                <ScrollView>
                    <Card>
                        <Text h4 h4Style={{ fontSize: 16 }}>Datos de la cita</Text>
                        <BoxSpace side={15} border={false} />

                        {rederData("Fecha", dateToString(new Date(appointment.date)))}
                        {rederData("Hora", timeToString(hhmmssToString(appointment.time)))}

                        <BoxSpace side={15} />
                        <Divider />
                        <BoxSpace side={15} />

                        <Text h4 h4Style={{ fontSize: 16 }}>Examen</Text>
                        <BoxSpace side={15} border={false} />

                        {rederData("Examen", examCatalogItem.typeExam)}
                        {rederData("Costo", `$${examCatalogItem.cost}`)}

                        <BoxSpace side={15} />
                        <Divider />
                        <BoxSpace side={15} />

                        <Text h4 h4Style={{ fontSize: 16 }}>Datos de la persona</Text>
                        <BoxSpace side={15} border={false} />

                        {rederData('Nombre(s)', userClient.name)}
                        {rederData('Apellidos(s)', userClient.lastName)}
                        {rederData('Edad', userClient.age)}
                        {rederData('Genero', userClient.gender)}
                    </Card>
                </ScrollView>

                <BoxSpace side={15} />
                <Button
                    title={'Confirmar'}
                    onPress={() => confirmar()}
                    loading={isLoading}
                    buttonStyle={{ backgroundColor: colors.PRIMARY }}
                />

            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}
