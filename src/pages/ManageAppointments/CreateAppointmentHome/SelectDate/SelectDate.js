import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { AppointmentCard, BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'
import { useSelectDate } from './useSelectDate'

export const SelectDate = ({ route, navigation }) => {

    const {
        examCatalogItem,
        appointmentsFree
    } = useSelectDate({ route, navigation });

    const rederData = (label, data) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text h4 h4Style={{ fontSize: 14, textAlign: 'right' }} style={{ flex: 3 }}>{label}</Text>
                <BoxSpace side={15} />
                <Text style={{ flex: 3 }}>{data}</Text>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                    <BoxSpace side={15} />
                    <Text h3>Seleciona una fecha</Text>
                    <Text>Estas son las fechas y horas disponibles</Text>

                    <BoxSpace side={30} />
                    {rederData("Tipo examen", examCatalogItem.typeExam)}
                    {rederData("Costo", examCatalogItem.cost)}

                    <BoxSpace side={30} />
                    {
                        appointmentsFree.length === 0
                            ? <Text h4 h4Style={{ fontSize: 16, textAlign: 'center' }}>No hay citas disponibles disponibles</Text>
                            : appointmentsFree.map(
                                (appoint, index) =>
                                    <AppointmentCard key={index} appointment={appoint} />
                            )
                    }


                </SafeAreaView>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
