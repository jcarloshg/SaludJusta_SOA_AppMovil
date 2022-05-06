
import { Text } from '@rneui/themed'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { globalstyles } from '../../../styled-components'

export const Loggin = () => {
    return (
        <SafeAreaView style={globalstyles.container}>
            <Text>CrearCliente</Text>
            <Text h3 style={{ fontSize: 18 }}>CHALEEE</Text>
        </SafeAreaView>
    )
}