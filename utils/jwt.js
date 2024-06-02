const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (id,usertype) => {
    return jwt.sign({ id,usertype }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;
