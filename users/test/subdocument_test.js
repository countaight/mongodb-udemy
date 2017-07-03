const assert = require('assert');

const User = require('../src/user');

describe('subdocuments', () => {
	it('can create a subdocument', (done) => {
		const joe = new User({
			name: 'Joe',
			posts: [{ title: 'PostTitle' }]
		});

		joe.save()
			.then(() => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert(user.posts[0] === 'PostTitle');
				done();
			});
	})
})