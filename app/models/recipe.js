var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var validate = require('mongoose-validator');
var uniqueValidator = require('mongoose-unique-validator');

var RecipeSchema = new mongoose.Schema({
	_cookbook: {type: Schema.Types.ObjectId, ref: 'Cookbook'},
	name: {type: String, required: true},
	url: {type: String, required: true},
	category: {type: String, required: true}
});
RecipeSchema.plugin(uniqueValidator);
mongoose.model('Recipe', RecipeSchema);