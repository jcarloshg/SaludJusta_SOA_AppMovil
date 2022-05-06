
const axios = require('axios').default;
import User from '../../../../models/entities/User.entitie';

/**
 *
 * @param {User} idExam
 * @returns
 */
export const createAccount = async (user) => {
    try {

        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/createAccount`;

        console.log(url);

        const params = new URLSearchParams();

        Object.entries(user).forEach(entry => {
            const [key, value] = entry;
            params.append(key, value);
        });

        return await axios.post(url, params);

    } catch (error) {
        // console.log(`[recordResults] -> `, error);
        return error.response;
    }
}
