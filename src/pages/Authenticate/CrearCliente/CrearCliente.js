
import { Button, Input, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'

export const CrearCliente = () => {

    const { theme } = useTheme();

    return (
        <SafeAreaView style={globalstyles.container}>
            <Text h3 >Crear nueva cliente</Text>
            <Text h4 >CrearCliente</Text>

            <BoxSpace side={30} />
            <Input
                placeholder='Nombres(s)'
            />
            <Input
                placeholder='Apellidos(s)'
            />
            <Input
                placeholder='Edad'
            />
            <Input
                placeholder='Genero'
            />

            <Button
                title={'Quiero generar una cita'}
                onPress={() => console.log("Crear una cita")}
                buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
            />

        </SafeAreaView>
    )
}
