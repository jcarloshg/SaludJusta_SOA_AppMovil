import React, { useEffect, useState } from 'react'
import { loggin } from './models/loggin'


export const useLoggin = ({ route, navigation }) => {

    const [auxLoggin, setAuxLoggin] = useState(loggin);

    const updateLoggin = (key, value) => {
        setAuxLoggin(auxLoggin => ({ ...auxLoggin, [key]: value }))
        console.log(key);
        console.log(value);
    }

    useEffect(() => {
        console.log(auxLoggin);
        return () => { }
    }, [auxLoggin])


    const iniciarSesion = () => {
        console.log(auxLoggin);
    }

    return {
        iniciarSesion,
        updateLoggin
    }
}
