const router = require("express").Router()
const { isAuth } = require("../../middleware")
const { getAllParentSubject } = require("../../models")




router.get('/dashboard', isAuth, async (req, res) => {
    let ParentSubject = await getAllParentSubject()
    console.log(ParentSubject);
    res.render('dashboard', { data: true, ParentSubject })
})




module.exports = {
    dashboardRoutes: router
}