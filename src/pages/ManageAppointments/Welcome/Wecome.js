
import React from 'react'
import { Text } from '@rneui/themed'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace, ButtonSecondary } from '../../../components'
import { globalstyles } from '../../../styled-components';
import { ButtonAction } from './components/ButtonAction/ButtonAction';
import { useWecome } from './useWecome';
import { noticias } from './models/noticias';
import { CardNoticia } from './components/CardNoticia/CardNoticia';
import { WIDTH } from '../../../utilities';
import { CardMisionVision } from './components/CardMisionVision/CardMisionVision';
import { mision_vision } from './models/mision_vision';

export const Wecome = ({ route, navigation }) => {

    const {
        theme,
        goToCreateAppointment,
        goToVerCitasHome,
        cerrarSesion
    } = useWecome({ route, navigation });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >

            <SafeAreaView style={[globalstyles.container_bottom_TopBar]}>
                <ScrollView>

                    <BoxSpace side={15} />
                    <Text h3>Bienvenido</Text>
                    <Text>¿Qué es lo que deaseas hacer?</Text>

                    <BoxSpace side={15} />
                    <ButtonAction
                        label='Deseo generar una nueva cita'
                        nameIcon='addfile'
                        funcNvidate={goToCreateAppointment}
                    />
                    <ButtonAction
                        label='Ver mis citas'
                        nameIcon='calendar'
                        funcNvidate={goToVerCitasHome}
                    />

                    <BoxSpace side={30} />
                    <Text h4 h4Style={{ paddingHorizontal: 15 }}>Noticias</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToStart={true}
                        pagingEnabled={true}
                    >
                        {
                            noticias.map((noticia, index) => (
                                <CardNoticia
                                    key={index}
                                    title={noticia.title}
                                    body={noticia.body}
                                />
                            ))
                        }
                    </ScrollView>


                    <BoxSpace side={30} />

                    <Text h4 h4Style={{ padding: 15 }}>¿Quines somos?</Text>
                    <ScrollView
                        style={{
                            width: WIDTH - 30,
                            backgroundColor: "#393939",
                            paddingVertical: 15
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        // snapToEnd={true}
                        snapToStart={true}
                        pagingEnabled={true}
                    >
                        {
                            mision_vision.map((mision_vision, index) =>
                                <CardMisionVision
                                    key={index}
                                    mision_vision={mision_vision}
                                />)
                        }
                    </ScrollView>

                    <BoxSpace side={90} />
                    <View style={globalstyles.bottom_element}>
                        <ButtonSecondary
                            label='Cerrar sesión'
                            funcOnPress={() => cerrarSesion()}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
