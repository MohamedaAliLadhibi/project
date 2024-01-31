import React ,{useState}   from 'react'
import axios from 'axios'



function createf(props) {

  const[name,setName] = useState('')
  const[brand,setBrand] = useState('')
  const[description,setDescription] = useState('')
  const[price,setPrice] = useState('')
  const[image,setImage] = useState('')

   const add =()=>{
   axios.post(`http://localhost:3000/api/female/add`,{name:name,brand:brand,description:description,price:price,image:image})
   .then(() => {  props.setRef(true) })
   .catch((err) => { console.log(err); });
}

  
  return (
<div className='connn'  >
 <div className='titleee' >Add your fragrance here </div>
<div  className='nameee' >name: <input type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}} /> </div>
<div className='decriptionnn' >description: <input type="text" placeholder='description' onChange={(e)=>{setDescription(e.target.value)}} /> </div>
<div className='branddd' >brand : <input type="text" placeholder='brand' onChange={(e)=>{setBrand(e.target.value)}} /> </div>
<div className='priceee' >price: <input type="text" placeholder='price' onChange={(e)=>{setPrice(e.target.value)}} /> </div>
<div imageee >image: <input type="text" placeholder='url' onChange={(e)=>{setImage(e.target.value)}} /> </div> 
{image && <img src={image} alt="fragrance" />}
<button  className='buttt' onClick={()=>{add() , props.changeView('Allmale') }} >add</button>

</div>
  )
}



export default createf