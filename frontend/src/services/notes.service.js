exports.baseUrl = 'http://localhost:3000/api/v1';

exports.getAllNotes = async () => {
    try {
        const res = await fetch(`${this.baseUrl}/notes`);
        const visible = true;
        const notes = await res.json();
        return [notes, notes[0], visible];
    } catch (e) {
        console.error(e);
        return [[], {}, false];
    }
};

exports.updateNote = async (note, id) => {
    try {
        const res = await fetch(`${this.baseUrl}/notes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });

        let response = await res.json();
        return [response, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};

exports.deleteNote = async (id) => {
    try {
        const res = await fetch(`${this.baseUrl}/notes/${id}`, {
            method: 'DELETE',
        });

        let response = await res.json();
        return [response, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};

exports.createNote = async (note) => {
    try {
        const res = await fetch(`${this.baseUrl}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });

        let response = await res.json();
        return [response, true];
    } catch (e) {
        console.error(e);
        return [null, false];
    }
};
