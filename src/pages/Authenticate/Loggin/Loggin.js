
import { Button, Input, Text } from '@rneui/themed'
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';

export const Loggin = ({ route, navigation }) => {

    const { theme } = useTheme();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>
                <SafeAreaView style={globalstyles.container}>

                    <BoxSpace side={15} />
                    <Text h3 style={{ fontSize: 18 }}>Iniciar sesion</Text>
                    <Text>Debes para poder generar citas</Text>

                    <BoxSpace side={30} />
                    <Input
                        label={'Correo electronico'}
                        // onChangeText={(email) => updateEmail(email)}
                        leftIcon={<MaterialCommunityIcons name="email-outline" size={24} color="black" />}
                    />
                    <Input
                        label={'Contraseña'}
                        // onChangeText={(pass) => changePass({ _pass: pass })}
                        secureTextEntry={true}
                        leftIcon={<Ionicons name="md-key-outline" size={24} color="black" />}
                    />

                    <View style={[globalstyles.bottom_element]}>
                        <Button
                            title={'Iniciar sesion'}
                            // onPress={() => crearCuenta()}
                            buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                        />
                    </View>

                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}