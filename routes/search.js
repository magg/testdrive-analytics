var models = require('../db/models');
var async = require('async');

module.exports = function (app) {

    app.get('/search', function (req, res){
		var term = req.query.term || '';
		models.Product.find({name: {$regex: term, $options: 'i'}}, 'name _id')
		.limit(10)
		.exec(function (err, docs){
			
			var results = docs.map(function(d){
				return {label: d.name, value: d.name, id:  d._id};	
			});
			
			res.json(results);
		});
    });

	//product details
    app.get('/product_details/:product_id', function (req, res){

		function fetchProducts(cb){
			models.Product.findById(req.params.product_id)
			.populate('manufacturer')
			.lean()
			.exec(cb);
		}
		
		function fetchSales(cb){
			models.Sale.find({product: req.params.product_id}, 'saleDate color quantity')
			.lean()
			.exec(cb);	
		}

		async.parallel([
			fetchProduct,
			fetchSales
			], function(err, results){
				
				if(err) return res.error(err);
				var product = results[0];
				product.sales = results[1];
				res.json({product_detail: product});	
			});	
	});
};