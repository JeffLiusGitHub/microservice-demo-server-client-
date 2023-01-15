const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
	const { type, data } = req.body;
	let status;
	if (type === 'CommentCreated') {
		status = data.content.includes('orange') ? 'rejected' : 'approved';
		await axios.post('http://event-bus-srv:4005/events', {
			type: 'CommentModerated',
			data: {
				...data,
				status,
			},
		});
	}

	res.send({});
});

app.listen(4003, () => console.log(`moderation app listening on port 4003`));
