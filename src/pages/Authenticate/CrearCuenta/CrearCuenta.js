import { Input, Text } from '@rneui/themed'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export const CrearCuenta = () => {
    return (

        <SafeAreaView style={[globalstyles.container]}>

            <BoxSpace side={15} />
            <Text h3>Crea tu cuenta</Text>
            <Text>Completa los campos siguientes</Text>

            <BoxSpace side={30} />
            <Input
                label={'Número de telefono'}
                // value={opstionSelected}
                // onPressIn={() => setModalVisible(true)}
                leftIcon={<AntDesign name="phone" size={18} color="black" />}
            />
            <Input
                label={'Correo electronico'}
                // value={opstionSelected}
                // onPressIn={() => setModalVisible(true)}
                leftIcon={<MaterialCommunityIcons name="email-outline" size={24} color="black" />}
            />
            <Input
                label={'Contraseña'}
            // value={opstionSelected}
            // onPressIn={() => setModalVisible(true)}
            // leftIcon={<AntDesign name="caretdown" size={18} color="black" />}
            />
            <Input
                label={'Confirma contraseña'}
            // value={opstionSelected}
            // onPressIn={() => setModalVisible(true)}
            // leftIcon={<AntDesign name="caretdown" size={18} color="black" />}
            />

        </SafeAreaView>
    )
}
