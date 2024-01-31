const {getAllM , getOneM , addM , delettM , updatedM} = require('../../server/database-mysql/index')


const allM=( (req, res) => {
    getAllM((err,result)=>{
      if(err)res.send(err)
      else res.json(result)
    })
  })
  
  const oneM=( (req, res) => {
    getOneM((err,result)=>{
      if(err)res.send(err)
      else res.json(result)
    },req.params.id)
  })
  
  
  
  const adderM =( (req, res) => {
    addM((err,result)=>{
      if(err)res.send(err)
      else res.send(result)
    },req.body)
  })
  
  const deleterM=( (req, res) => {
    delettM(req.params.id,(err,result)=>{
      if(err)res.send(err)
      else res.send(result)
    })
  })
  
  const updaterM=( (req, res) => {
    updatedM(req.body,req.params.id,(err,result)=>{
      if(err)res.send(err)
      else res.send("updated")
    })
  })
  
  module.exports ={ allM, oneM, adderM , deleterM ,updaterM}