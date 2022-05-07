
import { Button, Image, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../components'
import { globalstyles } from '../../../styled-components'

export const PageWelcome = ({ route, navigation }) => {

    const { theme } = useTheme();

    const logo = require('../../../assets/paloma_verde.png');

    const goToLoggin = () => navigation.navigate('Loggin');

    return (
        <ScrollView >
            <SafeAreaView style={[globalstyles.container]} >

                <BoxSpace side={60} />
                <Text h3 style={{ textAlign: 'center' }}>Ya estas registrado</Text>
                <Text style={{ textAlign: 'center' }}>Ahora ya puedes generar citas en cualquier de nuestros laboratorios</Text>

                <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                    <Image style={[{ height: 150, width: 300, resizeMode: 'center' }]} source={logo} />
                </View>

                <BoxSpace side={80} />
                <View style={[globalstyles.bottom_element]}>
                    <Button
                        title={'Iniciar Sesion'}
                        onPress={() => goToLoggin()}
                        buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                    />
                    <BoxSpace side={5} />
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}
