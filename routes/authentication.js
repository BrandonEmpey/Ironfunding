const express			 = require("express");
const passport           = require('passport');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');


const router 		 	 = express.Router();

router.get('signup', (req, res) =>
{
});

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/',
	failureRedirect : '/signup'
}));

router.post('/login', passport.authenticate('local-login', {
	successRedirect : '/',
	failureRedirect : '/login'
}));

module.exports = router;