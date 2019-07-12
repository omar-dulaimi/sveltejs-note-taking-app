const Note = require('../models/note.model');

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ isDeleted: { $ne: true } });
        res.json(notes);
    } catch (e) {
        res.status(404).json({ msg: 'Error getting notes', error: e });
    }
};

exports.createNote = async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.json(note);
    } catch (e) {
        res.status(404).json({ msg: 'Error creating note', error: e });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = await Note.findByIdAndUpdate(noteId, req.body);
        res.json(note);
    } catch (e) {
        res.status(404).json({ msg: 'Error updating note', error: e });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = await Note.findByIdAndUpdate(noteId, { isDeleted: true });
        res.json(note);
    } catch (e) {
        res.status(404).json({ msg: 'Error deleting note', error: e });
    }
};
