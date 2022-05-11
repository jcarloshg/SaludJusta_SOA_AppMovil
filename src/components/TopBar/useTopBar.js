import { useTheme } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/DataProvider/DataProvider';
import User from '../../models/entities/User.entitie';

export const useTopBar = ({ navigation }) => {

    const logo = require('../../assets/salud_justa_logo.png');

    const { theme } = useTheme();

    const { dataProvider, setDataProvider } = useContext(DataContext);

    const [userClient, setUserClient] = useState(new User({}));

    const navigateToLoggin = () => {
        navigation.navigate(
            'HomeAutenticate',
            {
                screen: 'Loggin',
                // params: { shop: shop, }
            }
        );
    }

    useEffect(() => {
        setUserClient(dataProvider.userClient);
        return () => { }
    }, [dataProvider])


    return {
        logo,
        theme,
        userClient,
        navigateToLoggin
    };
}
