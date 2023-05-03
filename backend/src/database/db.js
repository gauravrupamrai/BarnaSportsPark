const { connect } = require('http2');
const mongoose = require('mongoose');

let conn = null;

module.exports = connectDatabase = async () => {
    if(conn == null){
        console.log('Creating new connection to the database....');
        conn = await mongoose.connect(process.env.DB, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log('Database connected');
        return conn;
    }
    console.log('Connection already established, Reusing database connection');
};