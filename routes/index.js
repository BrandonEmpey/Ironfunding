const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign');



router.get('/', (req, res) => {
	res.render('index');
});

router.get('/', (req, res, next) => {
	// New
	Campaign
		.find({})
		.populate('_creator')
		.exec((err, campaigns) => {
			res.render('index', { campaigns });
		});
	// New
});







module.exports = router;

