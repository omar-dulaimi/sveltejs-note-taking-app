const axios = require('axios');

module.exports = axios.create({
    baseURL: `http://localhost:3000/api/v1`,
});
