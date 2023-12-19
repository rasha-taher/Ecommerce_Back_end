require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

mongoose.connect(process.env.MONGODB_URL, {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
const db = mongoose.connection;
db.on('error',(error)=> console.error.bind(error , "Error when connceting to database"))
db.once('open' , ()=> console.log(" Connected to Database"))


const productRoute= require('./routes/productRoutes')
const vendorRoute= require('./routes/vendoreRoutes')
const categoryRoute= require('./routes/categoriesRoutes')
const shippingRoute= require('./routes/shippingRoutes')
const adminRoute= require('./routes/adminRoutes')
const clientRoute= require('./routes/clientRoute')
const orderDetail= require('./routes/orderDetailRoute')
app.use('/admin', adminRoute)
app.use('/products', productRoute)
app.use('/vendors', vendorRoute)
app.use('/category', categoryRoute)
app.use('/shipping', shippingRoute)
app.use('/client', clientRoute)
app.use('/orderDetail', orderDetail)