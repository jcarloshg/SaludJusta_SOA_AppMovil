import { Text } from '@rneui/themed'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { colors, globalstyles } from '../../styled-components'

export const ButtonSecondary = ({
    label = '',
    funcOnPress = () => console.log("[ButtonSecondary] not fuction"),
}) => {
    return (
        <TouchableOpacity
            onPress={() => funcOnPress()}
            style={[
                // globalstyles.border,
                {
                    height: 35,
                    justifyContent: 'center'
                }
            ]}
        >
            <Text style={{ textAlign: 'center', color: colors.PRIMARY }}>{label}</Text>
        </TouchableOpacity>
    )
}
