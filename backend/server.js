require('dotenv').config();
const express= require('express');
const itemRoutes = require('./routes/items');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/api/items', itemRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(`server is running on port ${port}...`));