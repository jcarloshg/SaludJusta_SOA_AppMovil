import { Button, Divider } from '@rneui/base';
import React from 'react'
import { Image, View } from 'react-native';
import { colors } from '../../styled-components';
import { ButtonTouchable } from '../ButtonTouchable/ButtonTouchable';

export const TopBar = () => {

    // const logo = require('../../assets/salud_justa_logo.png');
    const logo = require('../../assets/salud_justa_logo.png');

    return (
        <View style={{ padding: 10 }}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                <Image style={{ height: 100, width: 100 }} source={logo} />
                <Button
                    title={'Iniciar sesión'}
                    onPress={() => console.log("Iniciar sesión")}
                    buttonStyle={{ backgroundColor: colors.PRIMARY }}
                />
            </View>
            <Divider />
        </View>
    )
}
