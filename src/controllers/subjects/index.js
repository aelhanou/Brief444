const router = require("express").Router()
const { getAllParentSubject, insertParentSubject, getAllChildSubject, insertChildsSubject,deleteParentSubject } = require("../../models")



router.post("/subject/deleteParentSub/:id",async (req,res)=>{
    let {id} = req.params
    await deleteParentSubject(id)
    res.redirect("/subject")
})

router.get(["/subject", "/subject/:id", "/subject/:id?subject"], async (req, res) => {
    let { id } = req.params
    let parentSub = []
    if (id) {
        parentSub = await getAllChildSubject(id)
    } else {
        parentSub = await getAllParentSubject()
    }

    if (Object.keys(req.query).length > 0) {
        let { subject } = req.query
        await insertChildsSubject(subject, id)
        parentSub = await getAllChildSubject(id)
    }
    res.render("subject", { parentSub })
})

router.post('/parentSub', (req, res) => {
    const { subject } = req.body
    insertParentSubject(subject)
    res.redirect("/subject")
})




// router.get('/childs/:id',async (req,res)=>{
//     console.log(parentSub);
//     // res.redirect(url.format({
//     //     pathname:"/subject",
//     //     query: {parentSub}
//     //   }));
// })




module.exports = {
    subjectRoutes: router
}