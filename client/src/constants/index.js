const dotenv = require('dotenv');
dotenv.config();

const { REACT_APP_API_URL:API_URL } = process.env;

export default {
    API_URL
};
