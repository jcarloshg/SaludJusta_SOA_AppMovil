import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'

export const SelectExamType = ({ route, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>

                    <BoxSpace side={15} />
                    <Text h3>Seleciona un tipo examen</Text>
                    <Text>Estos son los tipos de examen disponibles</Text>

                    <BoxSpace side={30} />

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
