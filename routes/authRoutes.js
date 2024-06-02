const express = require('express');
const { signup, login } = require('../controllers/authController');
const { check } = require('express-validator');
const router = express.Router();

router.post(
    '/signup',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
        check('usertype', 'Usertype is required and must be one of customer, admin, restaurant, delivery').isIn(['customer', 'admin', 'restaurant', 'delivery']),

    ],
    signup
);

router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    login
);

module.exports = router;
