var models = require('../db/models');

exports.build = function (app) {

  app.get('/', function (req, res){
    res.render('index', { title: 'Test-Drive Analitycs' });
  });

  app.get('/products', function (req, res) {
    models.Product.find({}, 'name price description price category rating reviews')
      .exec(function (err, docs) {
        res.send({
          products: docs
        });
      });
  });

};
