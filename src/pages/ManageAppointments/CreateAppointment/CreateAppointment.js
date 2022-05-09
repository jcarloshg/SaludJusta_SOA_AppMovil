import { Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../components'

export const CreateAppointment = ({ route, navigation }) => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>

                    <BoxSpace side={15} />
                    <Text h3>Crea tu cuenta</Text>
                    <Text>Completa los campos siguientes</Text>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
