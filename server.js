const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initialize app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//api routes
app.use('/api', apiRoutes);

//html routes
app.use('/', htmlRoutes);

//start server on the port
app.listen(PORT, () => console.log(`Listing on PORT: ${PORT}`));

