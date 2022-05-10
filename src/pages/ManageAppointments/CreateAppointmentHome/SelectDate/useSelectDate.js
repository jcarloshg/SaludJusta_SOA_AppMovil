import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react'
import { AppointmentAdapter } from '../../../../adapters/Appointment.adapter';
import ExamCatalogItem from '../../../../models/entities/ExamCatalogItem.entitie';
import { dateToStringYYYYMMDD } from '../../../../utilities/date/dateToStringYYYYMMDD';
import { getAvailableHoursDay } from './service/getAvailableHoursDay';

export const useSelectDate = ({ route, navigation }) => {

    const { examCatalogItem } = getParams(route.params);

    const [appointmentsFree, setAppointmentsFree] = useState([]);

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };

    const showDatepicker = () => showMode('date');

    const showTimepicker = () => showMode('time');

    useEffect(() => {
        (async () => {

            const resGetAvailableHoursDay =
                await getAvailableHoursDay(examCatalogItem.typeExam, dateToStringYYYYMMDD(date));

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
    }, [date]);

    const goToConfirmAppointment = (appointment) => {
        navigation.navigate(
            "ConfirmAppointment",
            {
                examCatalogItem: examCatalogItem,
                appointment: appointment,
            });
    }

    return {
        examCatalogItem,
        appointmentsFree,
        showDatepicker, date,
        goToConfirmAppointment
    };
}

const getParams = (params) => {

    const examCatalogItem = new ExamCatalogItem({ ...params });

    return { examCatalogItem };
}
