const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');


const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routers');
const db = require('./config/db');

//connect db
db.connect();

//urlencoded + json
app.use(express.urlencoded({
    extended : true
}));
// method override
app.use(methodOverride('_method'));
app.use(express.json());
//http logger morgan 
app.use(morgan('combined'));

// template engine
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main",
                            helpers: {sum: (a,b) => a+b,}
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'))

//Routes init
routes(app);

app.listen(port, () => console.log(`example app listening http://localhost:${port}`) )