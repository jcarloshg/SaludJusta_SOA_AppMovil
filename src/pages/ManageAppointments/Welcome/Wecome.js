import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'

export const Wecome = ({ route, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>

                    <BoxSpace side={15} />
                    <Text h3>Bienvenido</Text>
                    <Text>¿Qué es lo que deaseas hacer?</Text>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
