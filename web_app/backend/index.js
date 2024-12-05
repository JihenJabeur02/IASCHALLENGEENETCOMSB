const express = require('express');
const app = express();
const cors = require('cors');

// Database and models
const db = require('./db/index');
const rel = require('./models/relations')
const h = require('./models/Cart');
const y = require('./models/Request');
const o = require('./models/RequestDetails');
// Route imports
const industryRouter = require('./routes/industries');
const productsRouter = require('./routes/products');
const CartRouter = require('./routes/Cart');
const RequestRouter = require('./routes/Request');
const requestDetailstRouter = require('./routes/RequestDetails');
const CloudRouter = require('./routes/cloudinary');
const roadRouter = require('./routes/road');
// Middleware setup
app.use(cors());
app.use(express.json());

// Route setup
app.use('/industries', industryRouter);
app.use('/products', productsRouter);
app.use('/Cart', CartRouter);
app.use('/request', RequestRouter);
app.use('/cloudinary', CloudRouter);
app.use('/road',roadRouter);

// Server start
app.listen(5000, () => {
    console.log('listening on port 5000');
});
