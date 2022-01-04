const { getAllCandidat, insertCandidat, verifyCandidat } = require('./user')
const { getAllParentSubject, insertParentSubject, getAllChildSubject, insertChildsSubject,deleteParentSubject } = require("./subject")
const { insertQuestion, getAllQuestionsSubject,deleteQuestion } = require("./question")



module.exports = {
    getAllCandidat,
    insertCandidat,
    verifyCandidat,
    getAllParentSubject,
    insertParentSubject,
    getAllChildSubject,
    insertChildsSubject,
    insertQuestion,
    getAllQuestionsSubject,
    deleteParentSubject,
    deleteQuestion
}
