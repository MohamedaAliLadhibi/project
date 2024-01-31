const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'azerty12345AZ',
  database : 'hama'
});

module.exports = connection;

connection.connect((err)=>{
  if(err){console.log(err);}
  else console.log('connected successfully');
})


const getAllM = (cb)=>{
  const sql = `SELECT * FROM fragranceM`
  connection.query(sql,(err,result)=>{
    cb(err,result)
  })
}

const getOneM = (cb,id)=>{
  const sql = `SELECT * FROM fragranceM WHERE id = ${id}`
  connection.query(sql,(err,result)=>{
    cb(err,result)
  })
}

const addM = (cb,added)=>{
  const sql = `INSERT INTO fragranceM SET  ?`
  connection.query(sql,added,(err,result)=>{
    cb(err,result)
  })
}

const delettM = (id,cb)=>{
  const sql = `DELETE FROM fragranceM WHERE id = ${id}`
  connection.query(sql,(err,res)=>{
    cb(err,res)
  })
}

const updatedM = (updated,id,cb)=>{
  const sql = `UPDATE fragranceM SET ? WHERE id =${id}`
  connection.query(sql,updated,(err,res)=>{
    cb(err,res)
  })
}


                          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getAllF = (cb)=>{
  const sql = `SELECT * FROM fragranceF`
  connection.query(sql,(err,result)=>{
    cb(err,result)
  })
}

const getOneF = (cb,id)=>{
  const sql = `SELECT * FROM fragranceF WHERE id = ${id}`
  connection.query(sql,(err,result)=>{
    cb(err,result)
  })
}

const addF = (cb,added)=>{
  const sql = `INSERT INTO fragranceF SET  ?`
  connection.query(sql,added,(err,result)=>{
    cb(err,result)
  })
}

const delettF = (id,cb)=>{
  const sql = `DELETE FROM fragranceF WHERE id = ${id}`
  connection.query(sql,(err,res)=>{
    cb(err,res)
  })
}

const updatedF = (updated,id,cb)=>{
  const sql = `UPDATE fragranceF SET ? WHERE id =${id}`
  connection.query(sql,updated,(err,res)=>{
    cb(err,res)
  })
}














module.exports = {getAllM ,getOneM , addM , delettM , updatedM ,
                  getAllF ,getOneF , addF , delettF , updatedF ,}