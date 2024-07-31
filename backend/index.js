const express=require('express');
const app=express();
const cors=require('cors');
const pool=require('./db');
const router = require('./Routes/Route');
app.use(cors());
app.use(express.json());

app.get('/test',(req,res)=>{
  res.send('hi there!!')
})

app.use('/api/v1',router);

app.listen(3000,()=>{
  console.log('server is started');
})
