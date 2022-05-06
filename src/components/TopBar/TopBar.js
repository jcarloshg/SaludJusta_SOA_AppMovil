import { Divider, useTheme } from '@rneui/themed';
import React from 'react'
import { Image, View } from 'react-native';

export const TopBar = () => {

    const logo = require('../../assets/salud_justa_logo.png');

    const { theme } = useTheme();

    return (
        <View style={{ padding: 10 }}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                <Image style={{ height: 100, width: 100 }} source={logo} />
            </View>
            <Divider width={2} color={theme?.colors?.greyOutline} />
        </View>
    )
}
