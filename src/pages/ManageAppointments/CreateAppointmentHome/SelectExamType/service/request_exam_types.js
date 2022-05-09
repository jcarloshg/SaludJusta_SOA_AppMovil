
const axios = require('axios').default;

import { URL_API } from '../../../../../utilities/env';

export const request_exam_types = async () => {
    try {
        // http://localhost:8080/api_account/loggin?email=carlosj12336@gmail.com&password=jose123
        const url = `${URL_API}${process.env.REACT_APP_API_EXAM}/request_exam_types`;
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        // console.log(`[error] -> `, error);
        return error.response.data;
    }
}
