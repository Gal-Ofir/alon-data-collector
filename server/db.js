const mongoose = require('mongoose');
require('dotenv').config();


module.exports.getConnection = async () => {
    return await mongoose.createConnection(process.env.MONGO_CONN_STRING, {useNewUrlParser: true});
};