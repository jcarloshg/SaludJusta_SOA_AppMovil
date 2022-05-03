
import { Button, Card, useTheme, Text } from '@rneui/themed';
import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { BoxSpace } from '../../components';
import { globalstyles } from '../../styled-components';
import { CardNoticia } from './components/CardNoticia/CardNoticia';
import { noticias } from './models/noticias';


export const LandPage = () => {

    const { theme } = useTheme();

    console.log(theme);

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
                    <Text h4>
                        Noticias
                    </Text>
                    {
                        noticias.map((noticia, index) => (
                            <CardNoticia
                                key={index}
                                title={noticia.title}
                                body={noticia.body}
                            />
                        ))
                    }

                    {/*

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
