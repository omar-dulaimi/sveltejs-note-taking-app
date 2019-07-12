const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
});

const db = mongoose.connection;
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

db.on('error', (err) => {
    console.log('Mongoose DB Connection Error:');
});

db.once('open', () => {
    console.log('Mongoose DB Connection - Connected Successfully:');
});

module.exports = {
    db,
    Schema,
};
