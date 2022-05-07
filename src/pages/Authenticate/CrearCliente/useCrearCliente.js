import { useTheme } from '@rneui/themed';
import React, { useContext, useState } from 'react'
import Toast from 'react-native-toast-message';
import User from '../../../models/entities/User.entitie';
import { AutenticateContext } from '../HomeAutenticate/Context/AutenticateProvider';

export const useCrearCliente = ({ route, navigation }) => {

    const { userClient, setUserClient } = useContext(AutenticateContext);
    const { theme } = useTheme();

    const [auxUserClient, setAuxUserClient] = useState(new User({}));
    const updateName = (name) => setAuxUserClient(auxUserClient => ({ ...auxUserClient, name: name }));
    const updateLastName = (lastName) => setAuxUserClient(auxUserClient => ({ ...auxUserClient, lastName: lastName }));
    const updateAge = (age) => setAuxUserClient(auxUserClient => ({ ...auxUserClient, age: age }));
    const updateGender = (gender) => setAuxUserClient(auxUserClient => ({ ...auxUserClient, gender: gender }));

    const siguiente = () => {
        if (
            auxUserClient.name && auxUserClient.lastName &&
            auxUserClient.age && auxUserClient.gender
        ) {
            navigation.navigate('CrearCuenta');
            setUserClient(auxUserClient);
        } else {
            Toast.show({
                type: 'error',
                text1: "Campos vacios",
                text2: "Debes de conpletar todos los campos",
            });
        }
    }

    return {
        userClient, theme,
        auxUserClient, updateName, updateLastName, updateAge, updateGender,
        siguiente
    };
}
