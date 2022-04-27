import { Button, Card, useTheme } from '@rneui/themed';
import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { BoxSpace, ButtonTouchable } from '../../components';
import { colors, globalstyles } from '../../styled-components';


export const LandPage = () => {

    const logo = require('../../assets/salud_justa_logo.png');

    return (

        <SafeAreaView>
            <ScrollView style={{ padding: 10 }}>

                <View>

                    <View style={[{ flexDirection: 'row', alignItems: 'center', }]}>

                        <Image style={{ height: 80, width: 80 }} source={logo} />
                        {/* <BoxSpace side={80} border={true} /> */}
                        <BoxSpace side={5} />
                        {/* <Text style={globalstyles.subTitle}>Salud Justa</Text> */}

                        <View style={{ flex: 1 }} />

                        <ButtonTouchable
                            label={"Iniciar sesión"}
                            style={"PRIMARY"}
                            onPress={() => console.log("Iniciar sesión")}
                        />
                    </View>


                    <BoxSpace side={30} />
                    <ButtonTouchable
                        label={"Crear una cita"}
                        style={"PRIMARY"}
                        onPress={() => console.log("Crear una cita")}
                    />

                    <BoxSpace side={30} />
                    <Text style={globalstyles.subTitle}>Noticias</Text>
                    <BoxSpace side={300} border={true} />

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

                    </View>


                    <BoxSpace side={30} />
                </View>

            </ScrollView>
        </SafeAreaView >

    )
}
