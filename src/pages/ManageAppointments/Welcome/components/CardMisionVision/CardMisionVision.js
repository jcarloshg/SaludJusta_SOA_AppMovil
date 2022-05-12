import { Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import { WIDTH } from '../../../../../utilities'
import { AntDesign } from '@expo/vector-icons';

export const CardMisionVision = ({ mision_vision }) => {
    return (
        <View
            style={{
                width: WIDTH - 30,
                flexDirection: 'row'
            }}
        >
            <View style={{ flex: 1 }} />

            <View style={{ flex: 6 }} >
                <Text h4
                    h4Style={{
                        padding: 5,
                        color: "#fff",
                        textAlign: 'center',
                        fontSize: 18
                    }}>{mision_vision.title}</Text>
                <Text
                    style={{
                        padding: 5,
                        color: "#fff",
                        textAlign: 'center'
                    }}>{mision_vision.body}</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <AntDesign name="arrowright" size={24} color="#fff" />
            </View>

        </View>
    )
}
