import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'

export const SelectDate = ({ route, navigation }) => {

    console.log(route.params);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                    <BoxSpace side={15} />
                    <Text h3>Seleciona una fecha</Text>
                    <Text>Estas son las fechas y horas disponibles</Text>

                    <BoxSpace side={30} />
                </SafeAreaView>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
