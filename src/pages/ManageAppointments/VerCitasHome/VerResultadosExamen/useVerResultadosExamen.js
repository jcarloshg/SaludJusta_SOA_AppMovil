
import React, { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataProvider/DataProvider';
import Appointment from '../../../../models/entities/Appointment.entitie';
import Exam from '../../../../models/entities/Exam.entitie';
import ExamCatalogItem from '../../../../models/entities/ExamCatalogItem.entitie';
import User from '../../../../models/entities/User.entitie';

export const useVerResultadosExamen = ({ route, navigation }) => {

    const {
        appointment,
        examen,
        examCatalogItem
    } = getParams(route.params);

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);

    return {
        appointment,
        examen,
        examCatalogItem,
        userClient
    };
}


const getParams = (params) => {

    const appointment = new Appointment({ ...params.appointment });
    const examen = new Exam({ ...appointment.exam });
    const examCatalogItem = new ExamCatalogItem({ ...examen.examCatalogItem });

    return {
        appointment,
        examen,
        examCatalogItem
    };
}


