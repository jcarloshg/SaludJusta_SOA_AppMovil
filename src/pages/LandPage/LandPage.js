import { Button, Text, useTheme } from '@rneui/themed';
import React from 'react'
import { View } from 'react-native'
import { BoxSpace, ButtonTouchable } from '../../components';
import { globalstyles } from '../../styled-components';


export const LandPage = () => {

    const { theme } = useTheme();

    // h1, h2, h3, h4, normal

    return (
        <View>
            <Text h3 >Salud Justa</Text>
            <BoxSpace side={30} border={true} />

            <ButtonTouchable
                label={"HOLA MI PANA"}
                style={"PRIMARY"}
                onPress={() => console.log("HOLA MI PANA")}
            />

            <BoxSpace side={20} border={true} />
            <Text h4 >Noticias</Text>
            <BoxSpace side={300} border={true} />

            <BoxSpace side={20} border={true} />
            <Text h4 >¿Quienes somos?</Text>
            <BoxSpace side={300} border={true} />

        </View>
    )
}
