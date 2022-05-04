
import { Button, useTheme, Text } from '@rneui/themed';
import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../../components/BoxSpace/BoxSpace';
import { CardNoticia } from './components/CardNoticia/CardNoticia';
import { noticias } from './models/noticias'

export const LandPage = () => {

    const { theme } = useTheme();

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 15 }}>
                <View>

                    <Button
                        title={'Generar una cita'}
                        onPress={() => console.log("Crear una cita")}
                        buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY }}
                    />

                    <BoxSpace side={30} />
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
    )
}
