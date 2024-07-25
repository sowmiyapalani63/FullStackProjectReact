const express = require('express');
const router = express.Router();
const { activityCardData } = require('../data/data');

router.get('/', (req, res) => {
    res.json(activityCardData);
});

// router.post('/', (req, res) => {
//     res.status(201).json({
//         message: "This is handling POST in /cardData"
//     });
// });

module.exports = router;
