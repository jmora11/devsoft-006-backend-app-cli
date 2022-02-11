const { connect, connection } = require('mongoose');
const { MONGODB_URI } = require('./config');

const connectBD = async () => {
    await connect(MONGODB_URI);
};

connection.on('error', err => console.log(err));

module.exports = {
    connectBD,
    connection
};
