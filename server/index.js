const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { mongooose } = require('./database');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use(require('./routes/subject.routes'));
app.use(require('./routes/student.routes'));


//Desplegar servidor
app.listen(app.get('port'), () => {
    console.log("Server on port " + app.get('port'));
});