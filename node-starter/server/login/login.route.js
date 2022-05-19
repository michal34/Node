const express = require('express');
const router = express.Router();

const loginService = require('./service');

router.post('/api/login', function(req, res) {
	let msg = loginService.login(req);
	res.json(msg);
});

router.post('/api/refresh-token', function(req, res) {
	let msg = loginService.refreshToken(req);
	res.json(msg);
});

router.post('/api/secret-data', function(req, res) {
	let msg = loginService.secretData(req);
	res.json(msg);
});

router.post('/api/get-user-data', function(req, res) {
	let msg = loginService.getUserData(req);
	console.log(msg);
	res.json(msg);
});

module.exports = router;