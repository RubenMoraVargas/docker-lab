const express = require ('express') 
const app = express()

app.get('/', (req, res) => res.send('Hello World from a container!')) 
app.listen (3000, () => console.log('server ready'))