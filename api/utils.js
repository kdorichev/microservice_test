const { error, ok } = require('../status')

module.exports.test = (req, res) => {
	return ok(res)
}