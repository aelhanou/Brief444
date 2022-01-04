const router = require("express").Router()


const { getAllParentSubject, getAllChildSubject, insertQuestion, getAllQuestionsSubject, deleteQuestion } = require("../../models")





router.get(["/question", "/question/:id"], async (req, res) => {
    let { id } = req.params
    let parentSub = []
    let questions = []
    let status = false

    if (id) {
        parentSub = await getAllChildSubject(id)
        if (parentSub.length == 0) {
            status = true
            questions = await getAllQuestionsSubject(id)
        }
    } else {
        parentSub = await getAllParentSubject()
        parentSub.length == 0 && (status = true)
    }
    res.render("question", { parentSub, status, questions })
})



router.post("/addQuestion", async (req, res) => {
    let { question, score, idParent } = req.body
    await insertQuestion(question, score, idParent)
    res.redirect(`/question/${idParent}`)
})


router.post("/deleteQuestion/:id",async (req,res)=>{
    let {id} = req.params
    await deleteQuestion(id)
    res.redirect("/question")
})


module.exports = {
    questionRoutes: router
}