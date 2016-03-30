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
		}
	}
})();