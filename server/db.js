var mongoose = require('mongoose');
var upc = [
  {product_name: "Lacroix Tangerine", upc: 24463061163},
  {product_name: "ABC Sparkling water", upc: 52000328660},
  {product_name: "Luke's cheddar chips", upc: 84114112729}
];
// define collection schema and register collection as 'product'
var productSchema = new mongoose.Schema({
	product_name: String,
	upc: Number
});
var Product = mongoose.model('product', productSchema);

// connect to database
mongoose.connect('mongodb://heroku_ws4ch5nd:isant65jt6i3ga5l670v2hks09@ds143717.mlab.com:43717/heroku_ws4ch5nd');
var db = mongoose.connection;
db.on('error', function() {
	console.error.bind(console, 'connection error:');	
});
db.once('open', function() {
  // we're connected!
  console.log('Mongo connected!!');
});
Product.remove({}, function(err) {
	if (err) {
		console.log('error: ', err);
	} else {
		upc.forEach(function(element) {
			Product.create(element, function(err, product) {
				if (err) {
					console.log('error when inserting data: ', err);
				}
			})
		});
	}

});

module.exports = {
	db: db,
	Product: Product
};