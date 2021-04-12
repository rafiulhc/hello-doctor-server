const express = require('express');
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = 5000;

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3be27.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res)=>{
    res.send('Hello How are you')
})


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("hellodoctor").collection("teeth");
  console.log('database connected')
});

app.listen(process.env.PORT || port)