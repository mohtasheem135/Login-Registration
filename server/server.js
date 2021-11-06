const express = require ("express");
const app = express();
const port = process.env.PORT || 1350;
const Register = require("./models/SignUpModels");

require("./db/conn")

const routesUrls = require('./routes/routes')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, ()=>{
    console.log(`Listen on port http://localhost:${port}`);
});

// app.get('/express_backend', (req, res) => { 
//     res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT'); 
//   });


  

