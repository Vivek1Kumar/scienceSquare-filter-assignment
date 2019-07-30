const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

const contactus = require('./routes/api/contactus')
const appendex = require('./routes/api/appendex')

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// DataBase configure
const db = require('./config/keys').mongoURI;

//Connect server to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.log(err));

app.use('/api/appendix', appendex)

//use Routes threads
app.use('/api', contactus)

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	app.get('*', (req, res)=> {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}


const port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("server running port", port);
});
