import { Button, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../../components'
import { globalstyles } from '../../../../styled-components'
import { useConfirmPersonalData } from './useConfirmPersonalData'

export const ConfirmPersonalData = ({ route, navigation }) => {

    const {
        theme,
        dataProvider
    } = useConfirmPersonalData({ route, navigation });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container]}>

                    <BoxSpace side={15} />
                    <Text h3>Confirma tus datos personales</Text>
                    <Text>Verifica que tus datos sean correctos</Text>

                    <Text>
                        {JSON.stringify(dataProvider)}
                    </Text>

                    <View style={[globalstyles.bottom_element]}>
                        <Button
                            title={'Siguiente'}
                            onPress={() => console.log("asdf")}
                        // buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                        />
                    </View>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
