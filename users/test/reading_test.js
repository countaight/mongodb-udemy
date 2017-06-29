const assert = require('assert');

const User = require('../src/user');

describe('Reading users out of the database', () => {
	// Declare variable outside the beforeEach function so that it's available to the rest of the it test functions.
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe'});
		joe.save()
			.then(() => done());
	});

	it('finds all users with a name of Joe', (done) => {
		User.find({ name: 'Joe'})
			.then((users) => {
				console.log(users);
				done();
			});
	});
})