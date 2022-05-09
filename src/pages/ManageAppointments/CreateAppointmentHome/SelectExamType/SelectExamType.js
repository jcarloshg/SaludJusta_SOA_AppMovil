import React from 'react'
import { globalstyles } from '../../../../styled-components'

export const SelectExamType = ({ route, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
