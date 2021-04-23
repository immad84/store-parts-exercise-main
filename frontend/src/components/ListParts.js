import React from 'react';

function ListParts(props) {
  return (
    <div>
      {props.partsList.map(item => (
        <div className="d-flex justify-content-between p-3 mb-2 border border-1 inner" key={item.id}>  
          <div className="">{item.name}</div>
          <div className="">{item.type}</div>
          <div className="">{item.price}</div>
        </div>
      ))}
    </div>
   );
}

export default ListParts;