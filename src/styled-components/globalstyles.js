import React from 'react'
import { StyleSheet } from 'react-native';
import { HEIGHT } from '../utilities/dimensions';
import { colors } from './colors';

// const height = Dimensions.get('window').height - 25;

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
    },

    container: {
        // flex: 1,
        height: HEIGHT,
        padding: 15
    },

    container_flex: {
        flex: 1,
        padding: 15
    },

    container_bottom_TopBar: {
        // flex: 1,
        height: HEIGHT - 100,
        padding: 15
    },

    container_bottom_TopBar_plok: {
        // flex: 1,
        height: HEIGHT - 100,
    },

    bottom_element: {
        position: "absolute",
        bottom: 45,
        width: "100%",
        alignSelf: 'center'
    }
});

