import React from 'react'

function Allfemale(props) {

  
  return(
    
    <div className="grid-container" >
  
      {
props.dataF.map((ele,i)=>{
return(
  <div className='item'  key={i}>
    <div className="name" onClick={()=>{props.changeView("Onef",ele) , console.log(ele.id);}}  >  {ele.name}</div>
      <div className="brand"> brand : {ele.brand}</div>

    <div className="image">  <img src={ele.image}   alt="" /></div>
<br />
  </div>
)
})
      }
    </div>
  )
}

export default Allfemale