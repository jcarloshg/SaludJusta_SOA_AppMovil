import { useTheme } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { Alert, BackHandler } from 'react-native';
import { DataContext } from '../../../contexts/DataProvider/DataProvider';
import User from '../../../models/entities/User.entitie';

export const useWecome = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);

    const { theme } = useTheme();

    const cerrarSesion = () => {

        const _cerrarSesion = () => {
            setDataProvider(dataProvider => ({ ...dataProvider, userClient: new User({}) }));
            BackHandler.exitApp();

            // navigation.navigate(
            //     'HomeLandPage',
            //     {
            //         screen: 'LandPage',
            //     }
            // );
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

    const goToCreateAppointment = () => navigation.navigate('CreateAppointmentHome');

    const goToVerCitasHome = () => navigation.navigate('VerCitasHome');

    return {
        theme,
        goToCreateAppointment,
        goToVerCitasHome,
        cerrarSesion
    }
}
