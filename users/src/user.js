const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = require('./post');

const UserSchema = new Schema({
	name: {
		type: String,
		validate: {
			validator: (name) => name.length > 2,
			message: 'Name must be longer than 2 characters.'
		},
		required: [true, 'Name is required.']
	},
	posts: [PostSchema],
	likes: 0,
	blogPosts: [{
		type: Schema.Types.ObjectId,
		ref: 'BlogPost'
	}]
});

UserSchema.virtual('postCount').get(function() {
	return this.posts.length;
});

UserSchema.pre('remove', function(next) {
	// this === joe

	const BlogPost = mongoose.model('BlogPost');

	BlogPost.remove({ _id: { $in: this.blogPosts } })
		.then(() => next());
});

const User = mongoose.model('User', UserSchema);

module.exports = User;