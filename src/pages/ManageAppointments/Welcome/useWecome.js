import { useTheme } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { Alert, BackHandler } from 'react-native';
import { DataContext } from '../../../contexts/DataProvider/DataProvider';
import User from '../../../models/entities/User.entitie';

export const useWecome = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);

    const { theme } = useTheme();

    const cerrarSesion = () => {

        const _cerrarSesion = () => {
            setDataProvider(dataProvider => ({ ...dataProvider, userClient: new User({}) }));
            BackHandler.exitApp();
        }

        Alert.alert("Cerrar sesión", "¿Seguro que quieres cerrar sesión?", [
            {
                text: "No",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "Si",
                onPress: () => _cerrarSesion()
            },
        ]);
        return null;
    }

    useEffect(() => {

        const backAction = () => {
            cerrarSesion();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();

    }, []);

    const goToCreateAppointment = () => {
        userClient.idUser === null
            ? navigation.navigate('HomeAutenticate', { screen: 'Loggin' })
            : navigation.navigate('CreateAppointmentHome')
    }

    const goToVerCitasHome = () => {
        userClient.idUser === null
            ? navigation.navigate('HomeAutenticate', { screen: 'Loggin' })
            : navigation.navigate('VerCitasHome')
    }

    return {
        theme,
        goToCreateAppointment,
        goToVerCitasHome,
        cerrarSesion
    }
}
