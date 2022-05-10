
import React from 'react'
const axios = require('axios').default;
const qs = require('qs')

export const updateAppointment = async (
    FK_UserClient,
    FK_Exam,
    idAppointment,
) => {
    try {

        const url = `${process.env.LOCAL_HOST_JOB}${process.env.REACT_APP_API_APPOINTMENT}/updateAppointment`;

        const data = qs.stringify({
            FK_UserClient: FK_UserClient,
            FK_Exam: FK_Exam,
            idAppointment: idAppointment,
        });

        const config = {
            method: 'put',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        return await axios(config)
            .then((response) => response.data)
            .catch((error) => error.response.data);

    } catch (error) {
        console.log(`[recordResults] -> `, error);
        return error.response;
    }
}
