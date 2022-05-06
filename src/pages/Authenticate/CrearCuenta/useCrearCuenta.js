import React, { useContext, useEffect, useState } from 'react'
import { AlertButtons } from '../../../components/AlertButtons/AlertButtons';
import User from '../../../models/entities/User.entitie';
import { AutenticateContext } from '../HomeAutenticate/Context/AutenticateProvider';
import { createAccount, existAccount } from './services';

export const useCrearCuenta = ({ route, navigation }) => {

    const { userClient, setUserClient } = useContext(AutenticateContext);

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

        AlertButtons({
            title: 'Debes de llenar todos los campo',
            funcPrimary: () => { },
            labelPrimary: 'Aceptar'
        });

        if (auxUserClient.phoneNumber && auxUserClient.email) {
            setUserClient(
                userClient => ({
                    ...userClient,
                    phoneNumber: auxUserClient.phoneNumber,
                    email: auxUserClient.email,
                    password: auxUserClient.password,
                })
            );
        } else {
            AlertButtons({
                title: 'Debes de llenar todos los campo',
                funcPrimary: () => { },
                labelPrimary: 'Aceptar'
            });
        }
    }

    useEffect(() => {
        (async () => {

            const resExistAccount = await existAccount(userClient.email);
            if (resExistAccount.isOk === true) {
                console.log("resExistAccount - existe cuenta");
                return;
            }

            const resCreateAccount = await createAccount(userClient);
            console.log(`[resCreateAccount] -> `, resCreateAccount);

        })();

        return () => { }
    }, [userClient]);



    return {
        updatePhoneNumber,
        updateEmail,
        updatePassword,
        changePass,
        crearCuenta
    };
}
