const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('authentication/login');
});

module.exports = router;