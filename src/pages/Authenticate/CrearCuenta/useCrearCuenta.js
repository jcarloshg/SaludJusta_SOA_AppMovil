import React, { useContext, useState } from 'react'
import User from '../../../models/entities/User.entitie';
import { AutenticateContext } from '../HomeAutenticate/Context/AutenticateProvider';

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
            // TODO add service
            console.log(`[auxUserClient] -> `, auxUserClient);

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


    return {
        updatePhoneNumber,
        updateEmail,
        updatePassword,
        changePass,
        crearCuenta
    };
}
