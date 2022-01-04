const db = require("../../config/db")


const getAllParentSubject = async () => {
    let data = await db.execute(`SELECT * FROM subject WHERE status = 'Parent'`)
    return data[0]
}



const getAllChildSubject = async (id) => {
    let data = await db.execute(`SELECT * FROM subject WHERE subject_id = ${id}`)
    return data[0]
}

const deleteParentSubject = async (id) => {
    try {
        let data = await db.execute(`DELETE FROM subject WHERE id=${id}`)        
    } catch (error) {
        throw error
    }
}

const insertChildsSubject = async (Subject, Subject_id) => {
    try {
        let data = await db.execute(`INSERT INTO subject(name,subject_id,status) VALUES('${Subject}',${Subject_id},'Child')`)
        console.log(data);
    } catch (error) {
        throw error
    }

}

const verifyCandidat = async (email, password) => {
    let data = await db.execute(`SELECT * FROM candidat WHERE email='${email}' AND password='${password}'`)
    return data[0]

    // let yo =  db.query(`SELECT * FROM candidat WHERE email='${email}' AND password='${password}'`,(error,result)=>{
    //     if(error) throw error

    //     if(result.length > 0) {
    //         res.writeHead(302, {
    //             'Location': `home`
    //         });

    //         res.end()
    //     }else {
    //         res.writeHead(302, {
    //             'Location': `signIn`
    //         });
    //         res.end()

    //     }

    //     console.log(yo);


    // })

}


const insertParentSubject = async (Subject) => {
    try {
        let data = await db.execute(`INSERT INTO subject(name) VALUES('${Subject}')`)
        console.log(data);
    } catch (error) {
        throw error
    }

}


module.exports = {
    getAllParentSubject,
    insertParentSubject,
    getAllChildSubject,
    insertChildsSubject,
    deleteParentSubject
}