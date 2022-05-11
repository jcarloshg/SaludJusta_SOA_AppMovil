
import { Button, useTheme, Text } from '@rneui/themed';
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { BoxSpace } from '../../../components/BoxSpace/BoxSpace';
import { colors, globalstyles } from '../../../styled-components';
import { WIDTH } from '../../../utilities';
import { CardNoticia } from './components/CardNoticia/CardNoticia';
import { mision_vision } from './models/mision_vision';
import { noticias } from './models/noticias'

export const LandPage = ({ route, navigation }) => {

    const { theme } = useTheme();

    return (
        <SafeAreaView >
            <ScrollView>

                <BoxSpace side={30} />

                <Text h4 h4Style={{ padding: 15 }}>Noticias</Text>
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
                        width: WIDTH,
                        backgroundColor: "#595959",
                        paddingVertical: 15
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // snapToEnd={true}
                    snapToStart={true}
                    pagingEnabled={true}
                >
                    {
                        mision_vision.map((mision_vision, index) => (
                            <View
                                key={index}
                                style={{
                                    padding: 15,
                                    width: WIDTH
                                }}
                            >
                                <Text h4
                                    h4Style={{
                                        padding: 5,
                                        color: "#fff",
                                        textAlign: 'center'
                                    }}>{mision_vision.title}</Text>
                                <Text
                                    style={{
                                        padding: 5,
                                        color: "#fff",
                                        textAlign: 'center'
                                    }}>{mision_vision.body}</Text>
                            </View>
                        ))
                    }
                </ScrollView>


                <BoxSpace side={30} />

            </ScrollView>

            {/* <Button
                title={'Quiero generar una cita'}
                onPress={() => console.log("Crear una cita")}
                buttonStyle={{ backgroundColor: theme?.myColors.PRIMARY, height: 50 }}
            /> */}
        </SafeAreaView >
    )
}
