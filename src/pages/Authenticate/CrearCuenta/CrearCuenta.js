import { Button, Input, Text } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useCrearCuenta } from './useCrearCuenta'

export const CrearCuenta = ({ route, navigation }) => {

    const {
        updatePhoneNumber,
        updateEmail,
        updatePassword,
        changePass,
        crearCuenta,
        theme
    } = useCrearCuenta({ route, navigation });

    return (

        <SafeAreaView style={[globalstyles.container]}>

            <BoxSpace side={15} />
            <Text h3>Crea tu cuenta</Text>
            <Text>Completa los campos siguientes</Text>

            <BoxSpace side={30} />
            <Input
                label={'Número de telefono'}
                keyboardType='numeric'
                maxLength={10}
                onChangeText={(number) => updatePhoneNumber(number)}
                leftIcon={<AntDesign name="phone" size={18} color="black" />}
            />
            <Input
                label={'Correo electronico'}
                onChangeText={(email) => updateEmail(email)}
                leftIcon={<MaterialCommunityIcons name="email-outline" size={24} color="black" />}
            />
            <Input
                label={'Contraseña'}
                onChangeText={(pass) => changePass({ _pass: pass })}
                secureTextEntry={true}
            />
            <Input
                label={'Confirma contraseña'}
                onChangeText={(confiPass) => changePass({ _confiPass: confiPass })}
                secureTextEntry={true}
            />

            <View style={[globalstyles.bottom_element]}>
                <Button
                    title={'Siguiente'}
                    onPress={() => crearCuenta()}
                    buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                />
            </View>

        </SafeAreaView>
    )
}
