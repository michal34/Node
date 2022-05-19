const express = require('express');
const router = express.Router();

const valueService = require('./service/value');

router.post('/api/value', function(req, res) {
	let msg = valueService.getValue(req);
	res.json(msg);
});

module.exports = router;
