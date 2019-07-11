const express = require('express');
const noteRoutes = require('./note.route.js');

const router = express.Router();

module.exports = () => {
    router.use('/notes', noteRoutes);
    return router;
};
