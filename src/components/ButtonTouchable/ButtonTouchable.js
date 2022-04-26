import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

/**
 * style = PRIMARY | SECONDARY
 * @returns TouchableOpacity
 */
export const ButtonTouchable = ({
    label = null,
    style = ['PRIMARY', 'SECONDARY'],
    onPress = null,
    enable = true,
}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress && onPress()}
        >
            {label && <Text>{label}</Text>}
        </TouchableOpacity>
    )
}
