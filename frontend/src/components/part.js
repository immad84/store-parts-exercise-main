import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Part(prop) {
  const [parts, setPart] = useState([]);
  let id = 0;
  let value = prop.selectValue;

  useEffect(() => {
    fetch(`http://localhost:8081/store/parts?type=${value}`)
      .then(response => response.json())
      .then(result => {
        const list = result.map(item => {
          return item;
      })
      setPart(list);
    })
  },[value]);

  let partList = parts.map(item => {
    item.id = id;
    id += 1;
    return item;
  });


  return (
    <>
      <span><Link to="/">Home</Link></span>
      <div>
      {partList.map(item => (
        <div className="d-flex justify-content-between p-3 mb-2 border border-1 inner" key={item.id}>  
          <div className="">{item.name}</div>
          <div className="">{item.type}</div>
          <div className="">{item.price}</div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Part;