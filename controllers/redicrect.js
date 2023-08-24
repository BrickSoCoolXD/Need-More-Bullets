module.exports = (req,res, nexnt ) => {
    if (req.session.userId) {
        return res.redirect('/')
    }
}