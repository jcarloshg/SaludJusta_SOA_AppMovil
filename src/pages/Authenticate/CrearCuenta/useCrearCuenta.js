
import { useTheme } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react'
import Toast from 'react-native-toast-message';
import User from '../../../models/entities/User.entitie';
import { AutenticateContext } from '../HomeAutenticate/Context/AutenticateProvider';
import { createAccount, existAccount } from './services';

export const useCrearCuenta = ({ route, navigation }) => {

    const { userClient, setUserClient } = useContext(AutenticateContext);
    const { theme } = useTheme();

    const [auxUserClient, setAuxUserClient] = useState(new User({}));
    const updatePhoneNumber = (phoneNumber) => setAuxUserClient(userClient => ({ ...userClient, phoneNumber: phoneNumber }))
    const updateEmail = (email) => setAuxUserClient(userClient => ({ ...userClient, email: email }));
    const updatePassword = (password) => setAuxUserClient(useCrearCuenta => ({ ...useCrearCuenta, password: password }));

    const [pass, setPass] = useState("");
    const [confiPass, setConfiPass] = useState("");
    const changePass = ({ _pass = null, _confiPass = null }) => {

        const auxPass = _pass ?? pass;
        const auxConfiPass = _confiPass ?? confiPass;

        setPass(auxPass);
        setConfiPass(auxConfiPass);

        if (auxPass === "" || auxConfiPass === "") return;
        (auxPass === auxConfiPass)
            ? updatePassword(_pass ?? _confiPass)
            : console.log("[ERROR] -> contrasenias equivocadas");

    }

    const crearCuenta = () => {

        // console.log(userClient);
        // console.log(auxUserClient);

        if (auxUserClient.phoneNumber && auxUserClient.email && auxUserClient.password) {
            setUserClient(userClient => ({
                ...userClient,
                phoneNumber: auxUserClient.phoneNumber,
                email: auxUserClient.email,
                password: auxUserClient.password,
            }));
        } else {
            Toast.show({
                type: 'error',
                text1: "Campos vacios",
                text2: "Debes de conpletar todos los campos",
            });
        }
    }

    useEffect(() => {

        (async () => {

            if (!auxUserClient.phoneNumber || !auxUserClient.email || !auxUserClient.password) return;

            const resExistAccount = await existAccount(userClient.email);
            if (resExistAccount.isOk === true) {
                Toast.show({
                    type: 'error',
                    text1: "Este correo ya existe",
                    text2: "Debes ocupar otro correo",
                });
                return;
            }

            const resCreateAccount = await createAccount(userClient);
            if (resCreateAccount.isOk === false) {
                Toast.show({
                    type: 'error',
                    text1: "No se puede crear la cuenta",
                    text2: resCreateAccount.message,
                });
                return;
            }

            navigation.navigate('PageWelcome');

        })();

        return () => { }
    }, [userClient]);


    return {
        updatePhoneNumber,
        updateEmail,
        updatePassword,
        changePass,
        crearCuenta,
        theme
    };
}
