import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import { styles } from './styles'
import { colors, globalstyles } from '../../styled-components';

/**
 * style = PRIMARY | SECONDARY
 * @returns TouchableOpacity
 */
export const ButtonTouchable = ({
    label = null,
    style = 'PRIMARY',
    onPress = null,
    enable = true,
    style_ = {}
}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress && onPress()}
            style={[
                styles.touchableOpacity,
                styles[style],
                style_,
            ]}
        >
            {/* {label && <Text>{label}</Text>} */}
            {
                label &&
                <Text style={[
                    globalstyles.text,
                    { color: colors.WHITE_EEEEEE }
                ]}>
                    {label}
                </Text>}

        </TouchableOpacity>
    )
}
