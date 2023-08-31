const User = require('../models/User')

module.exports = (req,res) => {
    User.create(req.body).then(() => {
        console.log("User registered sucessfully!")
        res.redirect('/')
    }).catch((error) => {
        //console.log(error.error)
        if (error) {
            const validationErrors = Object.keys(eror.errors).map(key => errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
        }
    })
}