
import React from 'react'
import { Card, useTheme, Text } from '@rneui/themed';
import { Image, View } from 'react-native';
import { dateToString, WIDTH } from '../../../../../utilities';

export const CardNoticia = ({
    title = null,
    body = null,
    date = new Date(),
}) => {

    const imgNew = require('../../../../../assets/news_img.jpg');

    const { theme } = useTheme();

    return (
        <Card>
            <View style={{ width: WIDTH * 0.7, flexDirection: 'row' }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 18 }}>{title}</Text>
                    <Text style={{ fontSize: 12, color: theme.colors.grey2 }}>{dateToString(date)}</Text>
                    <Text>{body}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={{ height: 75, width: 75 }} source={imgNew} />
                </View>
            </View>
        </Card>
    )
}
