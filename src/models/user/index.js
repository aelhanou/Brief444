const db = require("../../config/db")


const getAllCandidat = async  () =>{
    let data = await db.execute(`SELECT * FROM candidat`)  
    return data[0]  
}


const verifyCandidat = async (email,password) => {
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


const insertCandidat = async (firstname,lastname,email,password) =>{
    try {
        db.query(`INSERT INTO candidat(firstname,lastname,email,password) VALUES('${firstname}','${lastname}','${email}','${password}')`,(error,res)=>{
            if(error) throw error
        }) 
    } catch (error) {
        throw error
    }
  
}


module.exports = {
    getAllCandidat,
    insertCandidat,
    verifyCandidat
}