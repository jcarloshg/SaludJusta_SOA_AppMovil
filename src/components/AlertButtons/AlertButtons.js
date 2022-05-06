import React from 'react'
import { Alert } from 'react-native';

export const AlertButtons = ({
    title = '',
    subTitle = '',
    labelPrimary = null,
    funcPrimary = null,
    labelSecundary = null,
    funcSecundary = null
}) =>
    Alert.alert(
        title,
        subTitle,
        [
            funcPrimary &&
            {
                text: labelPrimary,
                onPress: () => funcPrimary(),
                style: 'cancel',
            },
            funcSecundary &&
            {
                text: labelSecundary,
                onPress: () => funcSecundary()
            },
        ]
    );
