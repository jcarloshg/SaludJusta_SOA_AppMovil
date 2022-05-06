import React, { useContext, useEffect, useState } from 'react'
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
        if (auxPass === auxConfiPass) updatePassword(_pass ?? _confiPass);

    }

    const crearCuenta = () => {
        if (auxUserClient.phoneNumber && auxUserClient.email && auxUserClient.password) {
            setUserClient(
                userClient => ({
                    ...userClient,
                    phoneNumber: auxUserClient.phoneNumber,
                    email: auxUserClient.email,
                    password: auxUserClient.password,
                })
            );
        }
    }

    useEffect(() => {

        (async () => {

            const resExistAccount = await existAccount(userClient.email);
            console.log(resExistAccount);
            // if (resExistAccount.isOk === false) {
            //     console.log("resExistAccount - show error");
            //     return;
            // }

            // const plok = await createAccount(userClient);
            // console.log(`[plok] -> `, plok);

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
