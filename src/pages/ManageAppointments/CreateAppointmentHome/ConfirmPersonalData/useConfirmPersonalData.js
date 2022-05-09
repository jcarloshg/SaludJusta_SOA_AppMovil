import { useThemeMode } from '@rneui/themed';
import React, { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataProvider/DataProvider';

export const useConfirmPersonalData = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);

    const { theme } = useThemeMode();

    return {
        theme,
        dataProvider
    };
}
