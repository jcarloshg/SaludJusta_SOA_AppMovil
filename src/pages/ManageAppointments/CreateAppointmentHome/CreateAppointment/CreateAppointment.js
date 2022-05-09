import { Button, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'

export const CreateAppointment = ({ route, navigation }) => {

    const { theme } = useTheme();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container, globalstyles.border]}>

                    <BoxSpace side={15} />
                    <Text h3>Crear una nueva cita</Text>
                    <Text>Completa los campos siguientes</Text>

                    <View style={[globalstyles.bottom_element]}>
                        <Button
                            title={'Siguiente'}
                            onPress={() => console.log("asdf")}
                            buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
