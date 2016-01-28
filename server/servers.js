'use strict';
//module js
var application_root=__dirname,
	path		=	require('path'),
	express		=	require('express'),
	mongoose	=	require('mongoose'),
	morgan		=	require('morgan'),
	methodOverride=  require('method-override'),
	bodyParser	=	require('body-parser'),
	flash		=	require('connect-flash'),
	app 		= express();


app.use(express.static(path.join(application_root ,'../client')));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

//starting server port
var port 	=	process.env.PORT || 8080;
app.listen(port, function(){
	console.log("node server on port : " + port);
	console.log("application_root : " + application_root);
})

//connection db
var db	= require('./config/db.js');
mongoose.connect(db.url);

//routes
//require('./route/connection.js')(app, passport);
//require('./route/user.js')(app);
require('./route/mandat.js')(app);
//require('./route/page.js')(app);
//require('./route/menu.js')(app);
//require('./route/commentaire.js')(app);
