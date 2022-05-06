
const axios = require('axios').default;
const qs = require('qs')
import User from '../../../../models/entities/User.entitie';

/**
 *
 * @param {User} idExam
 * @returns
 */
export const createAccount = async (user) => {
    try {

        const url = `${process.env.LOCAL_HOST_JOB}${process.env.REACT_APP_API_ACCOUNT}/createAccount`;

        const data = qs.stringify({
            name: user.name,
            lastName: user.lastName,
            age: user.age,
            gender: user.gender,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password,
            role: 'CLIENT',
        });

        const config = {
            method: 'post',
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
        // console.log(`[recordResults] -> `, error);
        return error.response;
    }
}
