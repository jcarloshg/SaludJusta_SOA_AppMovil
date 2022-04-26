import React from 'react'
import { View } from 'react-native'
import { globalstyles } from '../../styled-components'
// import globalStyle from '../../../assets/styles/global_style'
// import { normalize } from '../../../utils/resize'

export const BoxSpace = ({
    height = 0,
    width = 0,
    side = null,
    border = false
}) => {
    return (
        <View
            style={{
                height: side ?? height,
                width: side ?? width,

                ...border ? globalstyles.border : {}
            }}
        />
    )
}
