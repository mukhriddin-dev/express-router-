const express = require('express');
const app = express();

const pageRouter=require('./routes/pages')



app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})



app.use('/', pageRouter);


const PORT = process.env.PORT || 5000;


app.listen(5000, () => console.log(`Server listening on ${PORT}`))