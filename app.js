const express = require('express');
const app = express();
app.use(express.static(__dirname)); //so server can access images and css file

const fs = require('fs').promises;

app.get('/', async (req, res) =>{
    res.send(await fs.readFile('./home.html', 'utf8'));
});

app.get('/grid', async (req, res) =>{
    
    res.send(await fs.readFile('./index.html', 'utf8'));
    
    
});


app.listen(3000, () =>{
    console.log('Listening on port 3000...');
})