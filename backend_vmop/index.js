const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());


//routes
app.get('/', (req, res) =>{
    res.json({message:'Hello World!'});
});


//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
