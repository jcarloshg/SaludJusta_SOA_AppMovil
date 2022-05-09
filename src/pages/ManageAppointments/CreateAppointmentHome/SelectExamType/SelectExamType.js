import { Button, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../../components'
import { ButtonSecondary } from '../../../../components/ButtonSecondary/ButtonSecondary'
import { colors, globalstyles } from '../../../../styled-components'
import { CardExamCatalogItem } from './components/CardExamCatalogItem/CardExamCatalogItem'
import { useSelectExamType } from './useSelectExamType'

export const SelectExamType = ({ route, navigation }) => {

    const {
        examCatalogArr,
        goToManageAppointmentsHome,
        goToSelectDate
    } = useSelectExamType({ route, navigation });

    const renerNotExams = () => (
        <View style={[{ flex: 1, justifyContent: 'center' }]}>
            <Text h4 h4Style={{ fontSize: 16, textAlign: 'center' }}>No hay examenes disponibles</Text>
            <ButtonSecondary
                label='Regrsaral inicio'
                funcOnPress={() => goToManageAppointmentsHome()}
            />
        </View>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                    <BoxSpace side={15} />
                    <Text h3>Seleciona un examen</Text>
                    <Text>Estos son los tipos de examen disponibles</Text>

                    <BoxSpace side={30} />
                    <ScrollView>
                        <View>
                            <Text style={{ color: "#86939e" }}>
                                Para cualquier prueba de laboratorio, usted deberá seguir estas instruccines:
                            </Text>
                            <BoxSpace side={15} />
                            <Text style={{ color: "#86939e", paddingLeft: 15 }}>
                                • No comer en forma excesiva el día antes de la prueba
                            </Text>
                            <BoxSpace side={15} />
                            <Text style={{ color: "#86939e", paddingLeft: 15 }}>
                                • Siga todas las instrucciones que le dé su profesional de la salud
                            </Text>
                        </View>

                        <BoxSpace side={30} />
                        {
                            examCatalogArr.length === 0
                                ? renerNotExams()
                                : examCatalogArr.map((examItem, index) =>
                                    <CardExamCatalogItem
                                        examCatalogItem={examItem}
                                        funcGoToSelectDate={() => goToSelectDate(examItem)}
                                        key={index} />

                                )
                        }
                    </ScrollView>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
