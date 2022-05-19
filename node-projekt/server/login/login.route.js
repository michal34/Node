const express = require('express');
const router = express.Router();

const loginService = require('./service');

router.post('/api/login', function(req, res) {
	let msg = loginService.login(req);
	res.json(msg);
});

module.exports = router;
