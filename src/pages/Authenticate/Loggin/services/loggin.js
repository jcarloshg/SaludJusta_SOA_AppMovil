
const axios = require('axios').default;

import { URL_API } from '../../../../utilities/env';

/**
 *
 * @param {string} email
 */
export const loggin = async (email, password) => {

    try {
        // http://localhost:8080/api_account/loggin?email=carlosj12336@gmail.com&password=jose123
        const url = `${URL_API}${process.env.REACT_APP_API_ACCOUNT}/loggin`;
        const res = await axios.get(
            url,
            {
                params: {
                    email: email,
                    password: password
                }
            }
        );
        return res.data;
    } catch (error) {
        // console.log(`[error] -> `, error);
        return error.response.data;
    }
}