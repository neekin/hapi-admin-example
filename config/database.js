const mongoose = require('mongoose');

class Database {

    static connect() {
        mongoose.connect('mongodb://admin:password@localhost:27017/mall?authSource=admin', {useNewUrlParser: true});
    }

}

module.exports = Database;
