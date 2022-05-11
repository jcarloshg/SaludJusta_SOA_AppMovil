
const axios = require('axios').default;

// import { URL_API } from '../../../../utilities/env';
import { URL_API } from '../../../../../utilities/env';

export const searchAppointmentsByClientName = async (name) => {
    try {

        const url = `${URL_API}${process.env.REACT_APP_API_APPOINTMENT}/searchAppointmentsByClientName`;

        const res = await axios.get(
            url,
            {
                params: {
                    name: name,
                }
            }
        );

        return res.data;
    } catch (error) {
        // console.log(`[error] -> `, error);
        return error.response.data;
    }
}
