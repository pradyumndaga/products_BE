const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const productRouter = require('./model/routes/products');
const categoryRouter = require('./model/routes/category');

const mongoDBStore = require('connect-mongodb-session')(session);
const MONGODB_URI = 'mongodb+srv://pdaga:qwerty123@cluster0.hgssiun.mongodb.net/?retryWrites=true&w=majority';
const store = new mongoDBStore({
    uri: MONGODB_URI,
    collection: 'session',
});
mongoose.connect(MONGODB_URI);
const db =mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connection success to MongoDB!'))

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
const cors = require('cors');
app.use(cors());
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.listen(process.env.PORT || 3000);