const {getAllF , getOneF , addF , delettF , updatedF} = require('../../server/database-mysql/index')


const allF=( (req, res) => {
    getAllF((err,result)=>{
      if(err)res.send(err)
      else res.json(result)
    })
  })
  
  const oneF=( (req, res) => {
    getOneF((err,result)=>{
      if(err)res.send(err)
      else res.json(result)
    },req.params.id)
  })
  
  
  
  const adderF =( (req, res) => {
    addF((err,result)=>{
      if(err)res.send(err)
      else res.send(result)
    },req.body)
  })
  
  const deleterF=( (req, res) => {
    delettF(req.params.id,(err,result)=>{
      if(err)res.send(err)
      else res.send("done")
    })
  })
  
  const updaterF=( (req, res) => {
    updatedF(req.body,req.params.id,(err,result)=>{
      if(err)res.send(err)
      else res.send("updated")
    })
  })
  
  module.exports ={ allF, oneF, adderF , deleterF ,updaterF}