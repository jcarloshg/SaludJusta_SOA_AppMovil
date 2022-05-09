
import React, { useEffect, useState } from 'react'
import { ExamCatalogItemAdapter } from '../../../../adapters/ExamCatalogItem.adapter';
import ExamCatalogItem from '../../../../models/entities/ExamCatalogItem.entitie';
import { request_exam_types } from './service/request_exam_types';

export const useSelectExamType = ({ route, navigation }) => {

    const [examCatalogArr, setExamCatalogArr] = useState([]);

    const goToManageAppointmentsHome = () => navigation.navigate(
        'ManageAppointmentsHome', { screen: 'Wecome' }
    );

    const goToSelectDate = (examCatalogItem) => navigation.navigate("SelectDate", examCatalogItem);

    useEffect(() => {

        (async () => {
            const res = await request_exam_types();

            if (res.isOk === false) return;

            setExamCatalogArr(
                res.data.map(
                    examItem => ExamCatalogItemAdapter(examItem)
                )
            );

        })();

        return () => { }
    }, [])


    return {
        examCatalogArr,
        goToManageAppointmentsHome,
        goToSelectDate
    };
}
