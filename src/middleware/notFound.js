const router = require("express").Router()






router.use((req, res) => {
    res.render("notFound")
})




module.exports = {
    NotFoundRoutes: router
}



