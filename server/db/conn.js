const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mytable", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("DB connected");
}).catch((e)=>{
    console.log(e, "---- DB Connection Unsuccessfull ----")
})