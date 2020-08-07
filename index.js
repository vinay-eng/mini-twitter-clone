const express = require('express');
const cors = require('cors');

const router = require('./router/route')
const connect = require('./config/db')

const app = express()

app.use(cors());
app.use(express.json())
connect();

app.use('/',router);

const PORT = 5000

app.listen(PORT,console.log('server is live at ' + PORT))