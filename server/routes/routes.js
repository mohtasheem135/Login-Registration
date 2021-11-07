const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    // console.log(request.body)


    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})



router.post('/login', async (request, response) => {
    // const email = request.body.email;
    // const password = request.body.password;
    // //console.log(` Email---${email} and the password is --- ${password}`)

    // const userEmail = await signUpTemplateCopy.findOne({ email: email });

    // if (userEmail.password === password) {
    //     // alert("LoggedIn successfully")
    //     console.log("Logged In Successfully")
    //     response.send({message: "Logged In SUCCCCCCCCCCCCessfulllYYYY"})
    //     // console.log(request.body)
    //     console.log("Email :-" +email)
    //     console.log("Password :-"+password)
        
    // } else {
    //     response.send("Wrong Password");
    //     response.send({message: "Password not matched"})
    // }

    try {
        const email = request.body.email;
        const password = request.body.password;
        //console.log(` Email---${email} and the password is --- ${password}`)

        const userEmail = await signUpTemplateCopy.findOne({email:email});

        if(userEmail.password===password){
            response.send({message: "logged In Successfully"});
            console.log("Logged In Successfully")
            // console.log(userEmail.email)
            // console.log(userEmail.password)
        } else {
            response.send({message: "Wrong Password"});
            console.log("WRong Password")
        }
    } catch (error) {
        response.send({message: "User not Registered"});
    }
})

router.get('/signin')

module.exports = router;