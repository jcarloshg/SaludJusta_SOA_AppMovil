
import React, { useContext, useEffect, useState } from 'react'
import { AppointmentAdapter } from '../../../../adapters/Appointment.adapter';
import { DataContext } from '../../../../contexts/DataProvider/DataProvider';
import User from '../../../../models/entities/User.entitie';
import { searchAppointmentsByClientName } from './services/searchAppointmentsByClientName';

export const useVerCitas = ({ route, navigation }) => {

    const { dataProvider, setDataProvider } = useContext(DataContext);
    const userClient = new User(dataProvider.userClient);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await searchAppointmentsByClientName(userClient.name);

            console.log(res);

            if (res.data === null || res.data.length === 0) return;

            setAppointments(
                res.data.map(appoint => AppointmentAdapter(appoint))
            );

        })();
        return () => { }
    }, []);


    return {
        appointments
    };
}
