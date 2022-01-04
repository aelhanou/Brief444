const db = require("../../config/db")


const insertQuestion = async (question, score, id_parent) => {
    try {
        let data = await db.execute(`INSERT INTO questions(question,score,subject_id) VALUES('${question}',${score},${id_parent})`)
    } catch (error) {
        throw error
    }
}


const deleteQuestion = async (id) => {
    try {
        let data = await db.execute(`DELETE FROM questions WHERE id=${id}`)        
    } catch (error) {
        throw error
    }
}

const getAllQuestionsSubject = async (id) => {
    try {
        let data = await db.execute(`SELECT * from questions WHERE subject_id = ${id}`)
        return data[0]
    } catch (error) {
        throw error
    }
}


module.exports = {
    insertQuestion,
    getAllQuestionsSubject,
    deleteQuestion
}