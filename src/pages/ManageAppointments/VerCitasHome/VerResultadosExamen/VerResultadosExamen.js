import { Card, Divider, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace, ButtonSecondary } from '../../../../components'
import { globalstyles } from '../../../../styled-components'
import { dateToString } from '../../../../utilities/date/dateToString'
import { hhmmssToString } from '../../../../utilities/date/hhmmssToString'
import { timeToString } from '../../../../utilities/date/timeToString'
import { useVerResultadosExamen } from './useVerResultadosExamen'

export const VerResultadosExamen = ({ route, navigation }) => {

    const {
        appointment,
        examen,
        examCatalogItem,
        userClient
    } = useVerResultadosExamen({ route, navigation });

    const rederData = (label, data) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text h4 h4Style={{ fontSize: 14, flex: 3, textAlign: 'right' }}>{label}</Text>
                <BoxSpace side={25} border={false} />
                <Text style={{ flex: 3 }}>{data}</Text>
            </View>
        )
    }

    const renderResults = (results) => {
        console.log(results);
        return (
            <>
                <Text style={{ flexWrap: 'wrap' }}>{results}</Text>
            </>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                <ScrollView style={{ flex: 1 }}>

                    <BoxSpace side={15} />
                    <Text h3>Resultados</Text>
                    <Text>Estas son los resultados del examen</Text>

                    <BoxSpace side={30} />

                    <Text h4 h4Style={{ fontSize: 16 }}>Datos de la cita</Text>
                    <BoxSpace side={15} border={false} />
                    {rederData("Fecha", dateToString(new Date(appointment.date)))}
                    {rederData("Hora", timeToString(hhmmssToString(appointment.time)))}
                    {rederData("Estatus", appointment.status)}

                    <BoxSpace side={15} />
                    <Divider />
                    <BoxSpace side={15} />

                    <Text h4 h4Style={{ fontSize: 16 }}>Examen</Text>
                    <BoxSpace side={15} border={false} />
                    {rederData("Tipo examen", examCatalogItem.typeExam)}
                    {rederData("Costo", `$ ${examCatalogItem.cost}`)}

                    <BoxSpace side={15} />
                    <Divider />
                    <BoxSpace side={15} />

                    <Text h4 h4Style={{ fontSize: 16 }}>Datos de la persona</Text>
                    <BoxSpace side={15} border={false} />
                    {rederData('Nombre(s)', userClient.name)}
                    {rederData('Apellidos(s)', userClient.lastName)}
                    {rederData('Edad', userClient.age)}
                    {rederData('Genero', userClient.gender)}

                    <BoxSpace side={15} />
                    <Divider />
                    <BoxSpace side={15} />

                    <Text h4 h4Style={{ fontSize: 16 }}>Resultados</Text>
                    <BoxSpace side={15} border={false} />
                    {
                        examen.results
                            ? renderResults(examen.results)
                            : (<Text style={{ textAlign: 'center', padding: 15 }}>No hay resultados registradas</Text >)
                    }

                    <BoxSpace side={15} />
                    <Divider />
                    <BoxSpace side={15} />

                    <BoxSpace side={30} />
                    <ButtonSecondary
                        label='Regresar'
                        funcOnPress={() => navigation.goBack()}
                    />

                    <BoxSpace side={30} />
                </ScrollView>


            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}
