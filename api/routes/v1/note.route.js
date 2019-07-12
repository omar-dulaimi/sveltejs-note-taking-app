const express = require('express');
const router = express.Router();
const NoteController = require('../../controllers/note.controller');

router
    .route('/')
    .get(NoteController.getAllNotes)
    .post(NoteController.createNote);

router
    .route('/:id')
    .patch(NoteController.updateNote)
    .delete(NoteController.deleteNote);

module.exports = router;
