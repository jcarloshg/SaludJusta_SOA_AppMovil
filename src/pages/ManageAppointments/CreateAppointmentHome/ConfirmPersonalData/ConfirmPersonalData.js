import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'

export const ConfirmPersonalData = ({ route, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>

                    <BoxSpace side={15} />
                    <Text h3>Confirma tus datos personales</Text>
                    <Text>Verifica que tus datos sean correctos</Text>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
