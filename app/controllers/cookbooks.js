var mongoose = require('mongoose');
var Cookbook = mongoose.model('Cookbook');
var Recipe = mongoose.model('Recipe');

module.exports = (function(){
	return{
		create: function(req, res){
			// console.log(req.body)
			var cookbook = new Cookbook({title: req.body.title});
			cookbook.save(function(err, results){
				if(err){
					var error={error: "Recipe Box name is already taken"}
					console.log(error)
					res.json(error)
				} else{
					console.log(cookbook._id, 'id')
					results = cookbook._id
					res.json(results)
				}
			})
		},
		index: function(req, res){
			Cookbook.find({}, function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		}
	}
})();