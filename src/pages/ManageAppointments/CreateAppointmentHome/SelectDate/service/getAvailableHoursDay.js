
const axios = require('axios').default;

import { URL_API } from '../../../../../utilities/env';

export const getAvailableHoursDay = async (typeExam, date) => {

    try {

        const url = `${URL_API}${process.env.REACT_APP_API_APPOINTMENT}/getAvailableHoursDay`

        const res = await axios.get(
            url,
            {
                params: {
                    typeExam: typeExam,
                    date: date
                }
            }
        );

        return res.data;

    } catch (error) {
        // console.log(`[error] -> `, error);
        return error.response.data;
    }

}
