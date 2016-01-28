var mongoose = require('mongoose');
//var user = require('./user.js');
var schema = mongoose.Schema;

var MandatSchema = new mongoose.Schema({
		title : String,
		adresse : String,
		photo : String,
        prix: Number,
	    date_creation : Date,
	    date_validite : Date
});

var Mandat = mongoose.model('Mandat', MandatSchema);
exports.mandat = Mandat;

exports.create = function(req, res, next){
	var rb = req.body;
	var newMandat = {
		title: rb.title,
		adresse : rb.adresse,
		photo : rb.photo,
        prix: rb.prix,
	    date_creation : rb.date_creation,
	    date_validite : rb.date_validite
	};
	var model = new Mandat(newMandat);
	model.save(function(err, resp){
		if (err || !resp) {
			return next(err);
		} else{
			res.json(resp);
		};
	});
};

exports.get =  function(req, res, next){
	Mandat.find().exec((function(err, doc){
		if(err || !doc) {
			res.send('erreur de get by id'); 
			return next(err)
		};
		res.json(doc);
	}));
};

exports.edit = function(req, res, next){
	var rb = req.body;
    Mandat.findById(req.params.id ,function(err,doc){
    	console.log(rb);
    	console.log(doc);

    
        if(err || !doc) return next(err);
        if(rb.title != null ) 
            doc.title = rb.title;
        if(rb.adresse != null)
            doc.adresse = rb.adresse;
        if(rb.prix != null)
            doc.prix = rb.prix;
        if(rb.date_validite != null)
            doc.date_validite = rb.date_validite;

        doc.save(function(err,result){
            if(err || !doc){
                return next(err);
            } else {
                res.json(result);
            }
        });
    });

};

exports.getByEditor =  function(req, res, next){
	Mandat.findById(req.params.id).exec(function(err, doc){
		if(err || !doc) {
			res.send('erreur de getByEditor'); 
			return next(err)
		};
		res.json(doc);
	})
};




exports.deleteMandat = function(req, res, next){
	Mandat.findById(req.params.id, function(err, doc){
		if(err || !doc) {res.send('erreur de deleting'); return next(err)};
		doc.remove();
		res.send('succes for deleting!!');
	})
};
