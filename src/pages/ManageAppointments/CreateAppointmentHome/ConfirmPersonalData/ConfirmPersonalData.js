import { Card } from '@rneui/base'
import { Button, Divider, Text, useThemeMode } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../../components'
import { colors, globalstyles } from '../../../../styled-components'
import { useConfirmPersonalData } from './useConfirmPersonalData'

export const ConfirmPersonalData = ({ route, navigation }) => {

    const {
        userClient,
        goToSelectExamType
    } = useConfirmPersonalData({ route, navigation });

    const rederData = (label, data) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text h4 h4Style={{ fontSize: 14, textAlign: 'right' }} style={{ flex: 3 }}>{label}</Text>
                <BoxSpace side={15} />
                <Text style={{ flex: 3 }}>{data}</Text>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>

                    <BoxSpace side={15} />
                    <Text h3>Confirma tus datos personales</Text>
                    <Text>Verifica que tus datos sean correctos</Text>

                    {/* <BoxSpace side={45} />
                    {rederData('ID cliente', userClient.idUser)} */}

                    <Card>
                        <Text h4 h4Style={{ fontSize: 18 }}>Datos personales</Text>
                        <BoxSpace side={15} />
                        {rederData('Nombre(s)', userClient.name)}
                        {rederData('Apellidos(s)', userClient.lastName)}
                        {rederData('Edad', userClient.age)}
                        {rederData('Genero', userClient.gender)}

                        <BoxSpace side={15} />
                        <Divider />
                        <BoxSpace side={15} />

                        <Text h4 h4Style={{ fontSize: 18 }}>Datos de contacto</Text>
                        <BoxSpace side={15} />
                        {rederData('Numero de telefono', userClient.phoneNumber)}
                        {rederData('Correo electronico', userClient.email)}

                    </Card>

                    <BoxSpace side={30} />
                    <View style={[globalstyles.bottom_element]}>
                        <Button
                            title={'Siguiente'}
                            onPress={() => goToSelectExamType("asdf")}
                            buttonStyle={{ backgroundColor: colors.PRIMARY }}
                        />
                    </View>

                </SafeAreaView>
            </ScrollView >
        </KeyboardAvoidingView >
    )
}
