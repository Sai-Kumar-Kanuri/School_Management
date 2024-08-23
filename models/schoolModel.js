const db = require('../config/db');

const School = {
    addSchool: (name, address, latitude, longitude, callback) => {
        const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
        db.execute(query, [name, address, latitude, longitude], callback);
    },

    listSchools: (latitude, longitude, callback) => {
        const query = `SELECT id, name, address, latitude, longitude, 
                       (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance 
                       FROM schools 
                       ORDER BY distance`;
        db.execute(query, [latitude, longitude, latitude], callback);
    }
};

module.exports = School;
