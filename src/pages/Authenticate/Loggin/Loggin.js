
import { Button, Card, Input, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace, ButtonSecondary, TopBar } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';
import { useLoggin } from './useLoggin'

export const Loggin = ({ route, navigation }) => {

    const { theme } = useTheme();

    const {
        isLoading,
        iniciarSesion,
        updateLoggin,
        navigateToCrearCliente
    } = useLoggin({ route, navigation });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <TopBar />
            <ScrollView>
                <SafeAreaView style={[globalstyles.container_bottom_TopBar, { justifyContent: 'center' }]}>

                    <Card>

                        <Text h3 style={{ fontSize: 18, textAlign: 'center' }}>Iniciar sesion</Text>
                        <Text style={{ textAlign: 'center' }}>Debes para poder generar citas</Text>

                        <BoxSpace side={30} />
                        <Input
                            label={'Correo electronico'}
                            onChangeText={(email) => updateLoggin('email', email)}
                            leftIcon={<MaterialCommunityIcons name="email-outline" size={24} color="black" />}
                        />
                        <Input
                            label={'Contraseña'}
                            onChangeText={(pass) => updateLoggin('pass', pass)}
                            secureTextEntry={true}
                            leftIcon={<Ionicons name="md-key-outline" size={24} color="black" />}
                        />

                        <BoxSpace side={30} />
                        <Button
                            title={'Iniciar sesion'}
                            loading={isLoading}
                            onPress={() => iniciarSesion()}
                            buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                        />

                        <BoxSpace side={15} />
                        <ButtonSecondary
                            label='Crear una cuenta'
                            funcOnPress={navigateToCrearCliente}
                        />

                    </Card>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}