import { useThemeMode } from '@rneui/themed';
import React, { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataProvider/DataProvider';
import User from '../../../../models/entities/User.entitie';

export const useConfirmPersonalData = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);

    const goToSelectExamType = () => navigation.navigate('SelectExamType');

    return {
        userClient,
        goToSelectExamType
    };
}
