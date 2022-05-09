import React, { createContext, useState } from 'react';
import User from '../../models/entities/User.entitie';

export const DataContext = createContext();

const data = {
    userClient: new User({}),
}

export const DataProvider = ({ children }) => {

    const [dataProvider, setDataProvider] = useState(data);

    return (
        <DataContext.Provider value={{ dataProvider, setDataProvider }}>
            {children}
        </DataContext.Provider>
    )
}
