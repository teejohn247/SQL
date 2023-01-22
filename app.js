import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";
import qbRoutes from "./routes/ailments";



import dotenv from 'dotenv';
import Debug from 'debug';
import logger from 'morgan';
import cors from 'cors';


import multer from 'multer'
const upload = multer()



const app = express();
dotenv.config();

app.use(express.json());


app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}))


app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "*");
  next();
};
app.use(allowCrossDomain);


const port = 4000;
const debug = Debug('http');




app.get('/api/v1', (req, res) => {
  res.json({
    message: 'Welcome to Ajebutter API'
  });
});

app.use('/api/v1', qbRoutes);




app.listen(4000, () => console.log(`Server has started. ${port}`));

export default app;