
import { Button, useTheme, Text } from '@rneui/themed';
import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { TopBar } from '../../../components';
import { BoxSpace } from '../../../components/BoxSpace/BoxSpace';
import { globalstyles } from '../../../styled-components';
import { CardNoticia } from './components/CardNoticia/CardNoticia';
import { noticias } from './models/noticias'

export const LandPage = ({ route, navigation }) => {

    const { theme } = useTheme();

    const navigateToLoggin = () => {
        navigation.navigate(
            'HomeAutenticate',
            {
                screen: 'Loggin',
                // params: { shop: shop, }
            }
        );
    }

    const navigateToCrearCliente = () => {
        navigation.navigate(
            'HomeAutenticate',
            {
                screen: 'CrearCliente',
                // params: { shop: shop, }
            }
        );
    }

    return (
        <>
            <SafeAreaView style={globalstyles.container_flex}>

                <Button
                    title={'Iniciar sesión'}
                    onPress={() => navigateToLoggin()}
                    buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                />
                <BoxSpace side={15} />
                <Button
                    title={'Crear cuenta'}
                    onPress={() => navigateToCrearCliente()}
                    buttonStyle={{ backgroundColor: theme?.myColors.SECONDARY }}
                />

                <BoxSpace side={30} />
                <ScrollView>
                    <View>
                        <Text h4>Noticias</Text>
                        {
                            noticias.map((noticia, index) => (
                                <CardNoticia
                                    key={index}
                                    title={noticia.title}
                                    body={noticia.body}
                                />
                            ))
                        }

                        <BoxSpace side={30} />
                    </View>
                </ScrollView>
            </SafeAreaView >

            <Button
                title={'Quiero generar una cita'}
                onPress={() => console.log("Crear una cita")}
                buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
            />
        </>
    )
}
