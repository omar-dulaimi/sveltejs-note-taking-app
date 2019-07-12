const mongoose = require('mongoose');
const Schema = require('../config').Schema;

const NoteSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

// this is used to remove both _id and _v, returning id instead
NoteSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
    },
});

module.exports = mongoose.model('Note', NoteSchema);
