
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useContext, useEffect, useState } from 'react'
import { AppointmentAdapter } from '../../../../adapters/Appointment.adapter';
import { DataContext } from '../../../../contexts/DataProvider/DataProvider';
import User from '../../../../models/entities/User.entitie';
import { searchAppointmentsByClientName } from './services/searchAppointmentsByClientName';

export const useVerCitas = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);

    const [appointments, setAppointments] = useState([]);
    const [showAppoints, setShowAppoints] = useState([]);

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

    const verTodas = () => setShowAppoints(appointments);

    useEffect(() => {

        const appointmentsShow = appointments.filter(appoint => {
            const dateAppointment = new Date(appoint.date);

            const year = dateAppointment.getFullYear() === date.getFullYear();
            const month = dateAppointment.getMonth() === date.getMonth();
            const day = dateAppointment.getDate() === date.getDate();

            return (year && month && day) ? true : false;
        });
        setShowAppoints(appointmentsShow);

        return () => { }
    }, [date]);

    useEffect(() => {
        (async () => {
            const res = await searchAppointmentsByClientName(userClient.name);

            if (res.data === null || res.data.length === 0) return;

            const appointments = res.data.map(appoint => AppointmentAdapter(appoint));

            setAppointments(appointments);
            setShowAppoints(appointments);

        })();
        return () => { }
    }, []);

    const goToVerResultados = (appointment) => {
        navigation.navigate(
            "VerResultadosExamen",
            {
                appointment: appointment
            }
        );
    }


    return {
        showAppoints,
        goToVerResultados, verTodas,
        showDatepicker, date,
    };
}
