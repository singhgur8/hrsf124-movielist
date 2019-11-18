const express = require('express')
const path = require('path');
const app = express()
const port = 3000


// app.get('/', (req, res) => res.send('Hello World!')) // this takes the first parameter as the location of where it will listen from...so 
// //with '/' it is looking for requests to the root. which is the easiest way to do it

app.use("/", express.static(path.join(__dirname, '../dist')));
//if app.get doesnt work try this method, i still have to direct it to the right thing tho
//might need to use this to tell the server where to find the client index file

app.listen(port, () => console.log(`Example app listening on port ${port}!`))