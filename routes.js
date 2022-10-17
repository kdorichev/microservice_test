const Utils = require('./api/utils');
const express = require('express');
const router = express.Router();

/*
 * Voices related handlers
 */
router.get('/utils/test', [ 
	Utils.test
]);

module.exports = router;