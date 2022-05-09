import React, { useContext, useEffect, useState } from 'react'
import { userLoggin } from './models/userLoggin'
import { loggin } from './services/loggin';
import Toast from 'react-native-toast-message';
import { DataContext } from '../../../contexts/DataProvider/DataProvider';
import User from '../../../models/entities/User.entitie';


export const useLoggin = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);

    const [auxLoggin, setAuxLoggin] = useState(userLoggin);
    const [isLoading, setIsLoading] = useState(false);

    const updateLoggin = (key, value) => {
        setAuxLoggin(auxLoggin => ({ ...auxLoggin, [key]: value }))
        console.log(key);
        console.log(value);
    }

    const iniciarSesion = async () => {

        setIsLoading(true);
        if (auxLoggin.email === "" || auxLoggin.pass === "") {
            Toast.show({
                type: 'error',
                text1: "Campos vacios",
                text2: "Debes de conpletar todos los campos",
            });
            setIsLoading(false);
            return;
        }

        const resLoggin = await loggin(auxLoggin.email, auxLoggin.pass);
        if (resLoggin.isOk == false) {
            Toast.show({
                type: 'error',
                text1: "No existe usuario",
                text2: "Verifica que tus datos sean correctos",
            });
            setIsLoading(false);
            return;
        }

        const auxClient = new User(resLoggin.data);

        setIsLoading(false);

        setDataProvider(dataProvider => ({ ...dataProvider, userClient: auxClient }));

        navigation.navigate('ManageAppointmentsHome', { screen: 'Wecome' });
    }

    return {
        isLoading,
        iniciarSesion,
        updateLoggin
    }
}
