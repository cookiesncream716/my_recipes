var mongoose = require('mongoose');
var Cookbook = mongoose.model('Cookbook');
var Recipe = mongoose.model('Recipe');

module.exports = (function(){
	return{
		create: function(req, res){
			// console.log('back controller', req.body)
			Cookbook.findOne({_id: req.body.cookbook_id}, function(err, cookbook){
				var recipe = new Recipe(req.body);
				recipe._cookbook = cookbook._id;
				cookbook.recipes.push(recipe);
				recipe.save(function(err){
					if(err){
						console.log('err saving recipe', err)
						res.json(err)
					} else{
						cookbook.save(function(err, results){
							if(err){
							console.log('err saving recipe', err)
							res.json(err)
							} else{
							res.json(results);
							}	
						})
					}
				})
			})
		},
		delete: function(req, res){
			Recipe.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('did not delete', err)
				} else{
					res.json(results)
				}
			})
		},
		update: function(req, res){
			// console.log(req.body.recipe_rating)
			Recipe.update({_id: req.params.id}, {rating: req.body.recipe_rating}, function(err, results){
				if(err){
					console.log('error updating rating', err);
					error = "Could not update rating"
					res.json(error)
				} else{
					res.json(results)
				}
			})
		},
		note: function(req, res){
			// console.log(req)
			Recipe.findOne({_id: req.params.id}, function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		},
		update_notes: function(req, res){
			console.log(req.params.id, req.body.notes)
			Recipe.update({_id: req.params.id}, {notes: req.body.notes}, function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		}
	}
})();