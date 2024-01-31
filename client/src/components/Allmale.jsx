import React from 'react'

function Allmale(props) {


  return (
    <div>

    <div className="grid-container">
    
      {props.dataM.map((ele, i) => (
        <div key={i} className="item">
          <div className="name cursor-pointer" onClick={() => props.changeView("Onem", ele)}>
            {ele.name}
          </div>
          <div className="brand">Brand: {ele.brand}</div>

          <div className="image">
            <img src={ele.image} alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Allmale;