import React from 'react'
import { StyleSheet } from 'react-native';
import { colors, globalstyles } from '../../styled-components';

export const styles = StyleSheet.create({
    touchableOpacity: {
        height: 40,

        paddingHorizontal: 10,
        // paddingVertical: 5,

        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',

    },
    touchableOpacity_enable: {

    },
    PRIMARY: {
        backgroundColor: colors.PRIMARY,
    },
    SECONDARY: {
        backgroundColor: colors.SECONDARY,
    }
});
