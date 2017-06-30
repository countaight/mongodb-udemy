const assert = require('assert');

const User = require('../src/user');

describe('Deleting a user', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe' });
		joe.save()
			.then(() => done());
	});

	it('model instance remove', () => {
		joe.remove()
			.then(() => User.find({ name: 'Joe' }))
			.then((user) => user === null);
	});

	it('class method remove', () => {
		// User

	});

	it('class method findAndRemove', () => {

	});

	it('class method findByIdAndRemove', () => {

	});
})
