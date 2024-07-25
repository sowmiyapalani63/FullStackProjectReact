const express = require('express');
const app = express();

const morgan = require('morgan'); // for logging requests
const cors = require('cors');
const bodyParser = require('body-parser'); // to parse incoming data


const activityCardDataRoutes = require('./api/routes/activityCardData');
const userAuthRoutes = require('./api/routes/userAuth');
const testimonialRoutes = require('./api/routes/testimonialCardData');

// Use morgan middleware for logging requests
app.use(cors());
app.use(morgan('dev'));

// Use body-parser middleware to parse incoming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Define your routes
app.use('/activityCardData', activityCardDataRoutes);
app.use('/userauth', userAuthRoutes);
app.use('/testimonial', testimonialRoutes);

// Error handling middleware,server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 404 error handling (for undefined routes)
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

module.exports = app;
