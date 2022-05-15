const express = require('express');
const router = express.Router();
const books = require('../Books')

// console.log(books);

router.get('/add', (req, res) => {
    res.send('add')
})


router.get('/delet', (req, res) => {
    res.send('delet')
})


router.get('/edit', (req, res) => {
    res.send('edit')
})

router.get('/books', (req, res) => {
    res.json(books)
})


router.get('/books/:id', (req, res) => {

    const isId = books.some(item => item.id == parseInt(req.params.id));

    if (isId) {
        res.json(books.filter(item => item.id == parseInt(req.params.id)));
    } else {
        res.status(400).json({ message: 'Not found' })
    }

})




router.post('/posts', (req,res) => {
    res.json({ message: 'add new books' })
})


router.put('/posts', (req,res) => {

    const isId = books.some(item => item.id == parseInt(req.params.id));

    if (isId) {
        res.json(books.filter(item => item.id == parseInt(req.params.id)));
    } else {
        res.status(400).json({ message: 'Not found ok' })
    }
})


router.delete('/posts', (req,res) => {
    res.json({ message: 'delet a books' })
})




module.exports = router;
