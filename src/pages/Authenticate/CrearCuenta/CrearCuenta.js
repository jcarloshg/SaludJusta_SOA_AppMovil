import { Button, Input, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
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
                        leftIcon={<Ionicons name="md-key-outline" size={24} color="black" />}
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
                            leftIcon={<Ionicons name="md-key-outline" size={24} color="black" />}
                        />
                    </View>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
