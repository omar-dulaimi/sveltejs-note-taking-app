const axios = require('../../../api/services/axios.service');

exports.getAllNotes = async () => {
    try {
        const res = await axios.get('/notes');
        const visible = true;
        const notes = res.data;
        return [notes, notes[0], visible];
    } catch (e) {
        console.error(e);
        return [[], {}, false];
    }
};

exports.updateNote = async (note, id) => {
    try {
        const res = await axios.patch(`/notes/${id}`, note);
        return [res, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};

exports.deleteNote = async (id) => {
    try {
        const res = await axios.delete(`/notes/${id}`);
        return [res, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};

exports.createNote = async (note) => {
    try {
        const res = await axios.post(`/notes`, note);
        return [res, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};
