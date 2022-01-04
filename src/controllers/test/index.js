const router = require("express").Router()




router.get('/test', (req, res) => {
    res.render("test")
})




module.exports = {
    testRoutes: router
}