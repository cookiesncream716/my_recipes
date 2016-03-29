var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var validate = require('mongoose-validator');
var uniqueValidator = require('mongoose-unique-validator')

var CookbookSchema = new mongoose.Schema({
	title: {type: String, required: true, unique: true},
	recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
	created_at: {type: Date, default: new Date}
});
CookbookSchema.plugin(uniqueValidator);
mongoose.model('Cookbook', CookbookSchema);