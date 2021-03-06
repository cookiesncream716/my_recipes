var cookbooks = require('./../controllers/cookbooks.js');
var recipes = require('./../controllers/recipes.js');


module.exports = function(app){
	app.post('/cookbook', function(req, res){
		cookbooks.create(req, res)
	});
	app.get('/cookbook', function(req, res){
		cookbooks.index(req, res)
	});
	app.post('/cookbook/:id', function(req, res){
		cookbooks.show(req, res)
	});
	app.post('/recipe', function(req, res){
		recipes.create(req, res)
	});
	app.post('/recipe/:id', function(req, res){
		recipes.update(req, res)
	});
	app.delete('/recipe/:id', function(req, res){
		recipes.delete(req, res)
	});
	app.post('/recipe/note/:id', function(req, res){
		recipes.note(req, res)
	});
	app.post('/recipe/notes/:id', function(req, res){
		recipes.update_notes(req, res)
	});
}