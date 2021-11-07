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



// router.post('/login', (req,res)=>{
//     res.send("LOGIN");
// })

router.get('/signin')

module.exports = router;