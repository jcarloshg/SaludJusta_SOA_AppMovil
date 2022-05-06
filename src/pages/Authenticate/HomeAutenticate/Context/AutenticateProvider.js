import React, { createContext, useState } from 'react'
import User from '../../../../models/entities/User.entitie';

export const AutenticateContext = createContext();

export const AutenticateProvider = ({ children }) => {

    const [userClient, setUserClient] = useState(new User({}));

    return (
        <AutenticateContext.Provider value={{ userClient, setUserClient }} >
            {children}
        </AutenticateContext.Provider>
    );
}
