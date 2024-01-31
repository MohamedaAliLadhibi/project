import React, { useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Onem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    brand: props.ele.brand,
    name: props.ele.name,
    description: props.ele.description,
    price: props.ele.price,
    image: props.ele.image
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const delett = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/api/male/delete/${id}`)
      .then((data) => { props.setRef(true) , props.changeView("Allmale") })
      .catch((err) => { console.log(err); });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const saveChanges = (id) => {
    axios.put(`http://localhost:3000/api/male/update/${id}`, editedData)
      .then((response) => {props.setRef(true), props.changeView("Allmale")})
      .catch((err) => {console.log(err)});
  };

  const {id} = props.ele;

  return (
    <div className='Details'>
      {isEditing ? (
        <div className='connn'>
          select brand :
          <input
            type="text"
            className='branddd'
            name='brand'
            value={editedData.brand}
            onChange={handleInputChange}
          />
          <br />
          select name :
          <input
            type="text"
            className='nameee'
            name='name'
            value={editedData.name}
            onChange={handleInputChange}
          />
          <br />
          select description :
          <input
            type="text"
            className='decriptionnn'
            name='description'
            value={editedData.description}
            onChange={handleInputChange}
          />
          <br />
          select price :
          <input
            type="text"
            className='priceee'
            name='price'
            value={editedData.price}
            onChange={handleInputChange}
          />
          <br />
          select image :
          <input
            type="text"
            name='image'
            className='imageee'
            value={editedData.image}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={() => saveChanges(id)}>Save</button>
        </div>
      ) : (
        <div className='one-prod'>
        <div className="image-one"> <img src={props.ele.image} alt="" /></div>
        <div className='one'>
          <div className="name-one">{props.ele.name}</div>
          <div>_________________________________________________________________</div>
          <div className="brand-one">brand: {props.ele.brand}</div>
          <div className="description">{props.ele.description}</div>
          <div className="price">{props.ele.price}$</div>
          <div className='bt'>
          <Stack direction="row" spacing={2}>
      <Button color="secondary"></Button>
      <Button variant="contained" color="success"
      onClick={handleEdit}>
        Update
      </Button>
      <Button variant="outlined" color="error"
      onClick={() => delett(props.ele.id)}>
        Delete
      </Button>
    </Stack>
        
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Onem;
