import React from 'react';
import { Link } from 'react-router-dom';


function Search(props){
  // return (
  //   <form className="d-flex justify-content-between mb-4">
  //     <div>
  //       <input type="text" placeholder="Search" className="search p-2" 
  //       onChange={e => props.search(e.target.value)} />
  //       <span className="icon"><FaSearch /></span>
  //     </div>
  //     <select className="select w-25 p-2">
  //       <option>Select the Part</option>
  //       <option value="mouse" onClick={(e) => props.setValue()}>Mouse</option>
  //       <option value="mousepad">MousePad</option>
  //       <option value="keyboard">Keyboard</option>
  //       <option value="monitor">Monitor</option>
  //     </select>
  //     <button className="bg-white w-25" onClick={(e) => {
  //       e.preventDefault();
  //       props.orderByPrice();
  //     }}
  //       >Order By Price<span></span></button>
  //   </form>
  // );
  return (
    <div className="row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="Search"
            type="text"
            className="form-control"
            aria-label="Search " 
            onChange={e => props.search(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Parts By Type: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" href="#" >
                <Link to="/parts" onClick={(e) => props.setValue(e.target.innerHTML)}>Mouse</Link>
              </button>
              <button className="dropdown-item" href="#" >
                <Link to="/parts" onClick={(e) => props.setValue(e.target.innerHTML)}>MousePad</Link>
              </button>
              <button className="dropdown-item" href="#"  >
                <Link to="/parts" onClick={(e) => props.setValue(e.target.innerHTML)}>Keyboard</Link>
              </button>
              <button className="dropdown-item" href="#"  >
                <Link to="/parts" onClick={(e) => props.setValue(e.target.innerHTML)}>Monitor</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;