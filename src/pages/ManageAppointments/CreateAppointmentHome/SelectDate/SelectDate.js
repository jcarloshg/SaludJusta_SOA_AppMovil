
import React from 'react'
import { Card, Divider, Input, Text } from '@rneui/themed'
import { AntDesign } from '@expo/vector-icons';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { AppointmentCard, BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'
import { useSelectDate } from './useSelectDate'
import { dateToString } from '../../../../utilities/date/dateToString';



export const SelectDate = ({ route, navigation }) => {

    Keyboard.dismiss(); // hidden keyboard

    const {
        examCatalogItem,
        appointmentsFree,
        showDatepicker, date,
        goToConfirmAppointment
    } = useSelectDate({ route, navigation });

    const rederData = (label, data) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text h4 h4Style={{ fontSize: 14, textAlign: 'right' }} style={{ flex: 3 }}>{label}</Text>
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
                    {/* <Text>Estas son las fechas y horas disponibles</Text> */}

                    <BoxSpace side={30} />
                    {rederData("Fechas disponibles para ", examCatalogItem.typeExam)}

                    {/* <BoxSpace side={30} />
                    {rederData("Tipo examen", examCatalogItem.typeExam)}
                    {rederData("Costo", `$${examCatalogItem.cost}`)} */}

                    <BoxSpace side={30} />
                    <Input
                        // label={"Ingresa una fecha"}
                        placeholder='Ingresa una fecha para tu cita'
                        inputStyle={{ fontSize: 14 }}
                        value={dateToString(date)}
                        onPressIn={() => showDatepicker("asdfsadf")}
                        rightIcon={<AntDesign name="calendar" size={24} color="black" />}
                    />
                    {
                        appointmentsFree.length === 0
                            ? (
                                <View style={{ justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ textAlign: 'center' }}>
                                        No hay citas disponibles disponibles
                                    </Text>
                                </View>
                            )
                            : appointmentsFree.map(
                                (appoint, index) =>
                                    <AppointmentCard
                                        key={index}
                                        appointment={appoint}
                                        funcOnPress={() => goToConfirmAppointment           (appoint)}
                                    />
                            )
                    }


                </SafeAreaView>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
