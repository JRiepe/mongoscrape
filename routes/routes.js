
// Routes

app.get('/', function(req, res){
		res.send('Hello, World!');
});

app.get('/all', function(req, res){
		db.animals.find({}, function (err, docs) {
			if (err) throw error;
			res.send(docs);
		})	
});

app.get('/name', function(req, res){
		db.animals.find({}).sort({name: 1}, function (err, docs) {
			if (err) throw error;
			res.send(docs);
		})	
});

app.get('/weight', function(req, res){
		db.animals.find({}).sort({weight: -1}, function (err, docs) {
			if (err) throw error;
			res.send(docs);
		})	
});
// End Routes

