module.exports.error = (res, error, code) => {
	res.json({
		'status': 'ERROR',
		'error': error
	}).status(code ?? 400);
};

module.exports.ok = (res, extra, code) => {
	let data = {
		status: 'OK'
	}

	if (extra) {
		data = { ...data, ...extra }
	}

	res.json(data).status(code ?? 200);
};