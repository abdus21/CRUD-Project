 import express from 'express';
 import dotenv from 'dotenv';
 import colors from 'colors';
 import mongoDBConaction from './src/config/db.js';
import path from 'path'
 dotenv.config()
 const app = express();

 // body init
 app.use(express.urlencoded({extended : false}));
 app.use(express.json());


 // mongo DB conaction
 mongoDBConaction();


 // security Middlewares lib import
 import xss from 'xss-clean';
 import hpp from 'hpp';
 import mongoSanitize from 'express-mongo-sanitize';
 import cors from 'cors';
 import helmet from 'helmet';
 import router from './src/routers/productRouter.js';





 
 // security Middlewares lib implement
// Apply the rate limiting middleware to all requests

app.use(cors());
app.use(xss());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(mongoSanitize());





app.use('/product',router); 

const __dirname = path.resolve();

app.use(express.static('client/build'));

app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname,'client','build','index.html'))
})


app.listen(process.env.PORT|| 5050,()=>{
    console.log(`server is running`.bgMagenta);
})