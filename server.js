const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()
const cors=require('cors')
const bodyParser=require('body-parser')
const path=require('path')

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
  console.log('Mongoose Connected Woohoo!')
})

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
if(process.env.NODE_ENV==='production')
{
 app.use(express.static(path.join(__dirname, './client/build')))
 app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/shortUrls', async (req, res) => {
  
  if (req.body.fullUrl==null||undefined){
    console.log(req.body)
  res.send('illegal request')
  }
  else{
  const shortUrls = await ShortUrl.findOne({full:req.body.fullUrl})
  if(shortUrls){
    console.log(req.body,"already in database")
    res.send(shortUrls.short)
    
  }
  else{
    await ShortUrl.create({ full: req.body.fullUrl })
    const newUrl = await ShortUrl.findOne({full:req.body.fullUrl})
    console.log(req.body,'added to database')
    res.send(newUrl.short)
    
  }
}
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)
  shortUrl.clicks++
  shortUrl.save()
  res.redirect(shortUrl.full)
})
const PORT = process.env.PORT || '27017'

app.listen(PORT,()=>{console.log('Listening on port',PORT)});
