const express = require('express');
const router = express.Router();
const NoteController = require('../../controllers/note.controller');

router.route('/').get(NoteController.list);

module.exports = router;
