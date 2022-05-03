import { Button, Card, useTheme } from '@rneui/themed';
import React from 'react'
import { View, SafeAreaView, ScrollView, Image } from 'react-native'
import { BoxSpace, ButtonTouchable } from '../../components';
import { colors, globalstyles } from '../../styled-components';

import { AntDesign } from '@expo/vector-icons';
import { Text } from '@rneui/base';


export const LandPage = () => {

    const { theme } = useTheme();

    console.log(theme);
    console.log(theme?.colors?.warning);

    return (

        <SafeAreaView>
            <ScrollView style={{ padding: 15 }}>
                <View>

                    <Button
                        title={'Generar una cita'}
                        onPress={() => console.log("Crear una cita")}
                        buttonStyle={{ backgroundColor: colors.PRIMARY }}
                    />

                    <BoxSpace side={30} />
                    <Text
                        h3
                        h3Style={{ color: theme?.colors?.warning }}
                    >
                        Noticias
                    </Text>

                    <BoxSpace side={30} />
                    <Text
                        h3
                        h3Style={{ color: theme?.myColors.PRIMARY }}
                    >
                        ¿Quienes somos?
                    </Text>

                    {/* <Text style={globalstyles.subTitle}>Noticias</Text>
                    <Card>
                        <Text style={[globalstyles.text]}>Contribuir a que cada día más personas, en más lugares,</Text>
                    </Card>
                    <Card>
                        <Text style={[globalstyles.text]}>Contribuir a que cada día más personas, en más lugares,</Text>
                    </Card>
                    <Card>
                        <Text style={[globalstyles.text]}>Contribuir a que cada día más personas, en más lugares,</Text>
                    </Card>

                    <BoxSpace side={30} />
                    <View>
                        <Text style={globalstyles.subTitle}>¿Quienes somos?</Text>
                        <Card>
                            <Card.Title>Misión</Card.Title>
                            <Card.Divider />
                            <Text style={[globalstyles.text, { textAlign: 'center' }]}>
                                Contribuir a que cada día más personas, en más lugares,
                                tengan una mayor accesibilidad a servicios de prevención
                                y diagnóstico confiables, contando con el mejor equipo humano y tecnológico.
                            </Text>
                        </Card>

                        <Card>
                            <Card.Title>Visión</Card.Title>
                            <Card.Divider />
                            <Text style={[globalstyles.text, { textAlign: 'center' }]}>
                                Ser la institución líder en prevención y diagnóstico
                                oportuno en las áreas de influencia de nuestras clínicas,
                                contribuyendo a conservar y mejorar la salud de las
                                personas, y con ello, su calidad de vida.
                            </Text>
                        </Card>

                    </View> */}

                    <BoxSpace side={30} />
                </View>

            </ScrollView>
        </SafeAreaView >

    )
}
