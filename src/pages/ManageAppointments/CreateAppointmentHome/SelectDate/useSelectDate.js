import React, { useEffect, useState } from 'react'
import { AppointmentAdapter } from '../../../../adapters/Appointment.adapter';
import ExamCatalogItem from '../../../../models/entities/ExamCatalogItem.entitie';
import { getAvailableHoursDay } from './service/getAvailableHoursDay';

export const useSelectDate = ({ route, navigation }) => {

    const { examCatalogItem } = getParams(route.params);

    const [appointmentsFree, setAppointmentsFree] = useState([]);

    useEffect(() => {

        (async () => {

            const resGetAvailableHoursDay = await getAvailableHoursDay(examCatalogItem.typeExam, "2022-04-21");

            if (resGetAvailableHoursDay.isOk === true)
                setAppointmentsFree(
                    resGetAvailableHoursDay.data.map(
                        appoint => AppointmentAdapter(appoint)
                    )
                );

            if (resGetAvailableHoursDay.isOk === false)
                setAppointmentsFree([]);

        })();

        return () => { }
    }, []);


    return {
        examCatalogItem,
        appointmentsFree
    };
}

const getParams = (params) => {

    const examCatalogItem = new ExamCatalogItem({ ...params });

    return { examCatalogItem };
}
