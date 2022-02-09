const { connect, connection } = require('mongoose');


const connectBD = async () => {
    await connect('mongodb://localhost/taskcli');
};

connection.on('error', err => console.log(err));

module.exports = {
    connectBD,
    connection
};
