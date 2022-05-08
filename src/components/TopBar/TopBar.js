import { Divider, useTheme } from '@rneui/themed';
import React from 'react'
import { Image, View } from 'react-native';
import { globalstyles } from '../../styled-components';

export const TopBar = () => {

    const logo = require('../../assets/salud_justa_logo.png');

    const { theme } = useTheme();

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                <Image style={{ height: 100, width: 100 }} source={logo} />
            </View>
            <Divider width={1.5} color={theme?.colors?.greyOutline} />
        </View>
    )
}
