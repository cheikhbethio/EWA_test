var mandat = require('../models/mandat.js');

module.exports =  function(app){

	app.post('/api/mandat', mandat.create);
	app.get('/api/mandat', mandat.get);
	app.get('/api/mandat/:id', mandat.getByEditor);	
	app.put('/api/mandat/:id', mandat.edit);
	app.delete('/api/mandat/:id', mandat.deleteMandat);
	

}