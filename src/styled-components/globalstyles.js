import React from 'react'
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalstyles = StyleSheet.create({

    // h1, h2, h3, h4, normal
    //text
    title: {
        fontSize: 30,
        // fontFamily: font.Alternates,
        color: colors.BLACK_1E1E1E,
    },
    subTitle: {
        fontSize: 20,
        // fontFamily: font.Alternates,
        color: colors.BLACK_1E1E1E,
    },
    text_bold: {
        fontSize: 18,
        // fontFamily: font.Alternates,
        color: colors.BLACK_1E1E1E,
    },
    text: {
        fontSize: 16,
        // fontFamily: font.Alternates,
        color: colors.BLACK_1E1E1E,
    },

    border: {
        borderWidth: 1,
        borderColor: colors.RED_FF0000,
    }
});

