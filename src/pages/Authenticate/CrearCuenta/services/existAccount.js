
const axios = require('axios').default;

/**
 *
 * @param {string} email
 */
export const existAccount = async (email) => {
    try {

        // http://192.168.1.89:8080/api_account/existAccount?email=alejando@email.com
        const url = `http://192.168.1.89:8080${process.env.REACT_APP_API_ACCOUNT}/existAccount`
        // const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/existAccount`;
        const res = await axios.get(
            url,
            {
                params: {
                    email: email
                }
            }
        );
        return res.data;
    } catch (error) {
        // console.log(`[error] -> `, error);
        return error.response.data;
    }
}