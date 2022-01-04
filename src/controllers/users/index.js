const router = require("express").Router()
const { getAllCandidat, verifyCandidat } = require("../../models")



router.get('/login', async (req, res) => {
    if (req.session.isAuth) {
        return res.redirect("/dashboard")
    }
    res.render("auth/login")
})

router.post('/login', async (req, res) => {

    let { email, password } = req.body
    let data = verifyCandidat(email, password)
    if (data) {
        req.session.isAuth = true
        return res.redirect("/dashboard")
    }

    res.redirect("/login")
})


router.get('/register', (req, res) => {
    if (req.session.isAuth) {
        return res.redirect("/dashboard")
    }
    res.render("auth/register")
})



router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/login')
})



router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (!err) {
            res.redirect('/login')
        }
    })
})






module.exports = {
    loginRoutes: router
}