const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors=require('cors')
const categories = require('./Data/Catagories.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send('news API Running')
});
app.get('/news-categories', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
  console.log('Dragon news server is running on port',port);
});