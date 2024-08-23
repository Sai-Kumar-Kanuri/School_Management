const School = require('../models/schoolModel');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    School.addSchool(name, address, latitude, longitude, (err, results) => {
        if (err) {
            return res.status(500).send({ error: 'Database error.' });
        }
        res.status(201).send({ message: 'School added successfully.' });
    });
};

exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).send({ error: 'Latitude and longitude are required.' });
    }

    School.listSchools(latitude, longitude, (err, results) => {
        if (err) {
            return res.status(500).send({ error: 'Database error.' });
        }
        res.status(200).send(results);
    });
};
