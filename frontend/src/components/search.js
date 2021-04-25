// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Search({ setValue, search, dir }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="Search"
            type="text"
            className="form-control mr-5"
            aria-label="Search "
            placeholder="Search"
            // eslint-disable-next-line react/prop-types
            onChange={(e) => search(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn border dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Parts By Type:
              <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button type="button" className="dropdown-item" href="#">
                <Link to="/parts" onClick={(e) => setValue(e.target.innerHTML)}>Mouse</Link>
              </button>
              <button type="button" className="dropdown-item" href="#">
                <Link to="/parts" onClick={(e) => setValue(e.target.innerHTML)}>MousePad</Link>
              </button>
              <button type="button" className="dropdown-item" href="#">
                <Link to="/parts" onClick={(e) => setValue(e.target.innerHTML)}>Keyboard</Link>
              </button>
              <button type="button" className="dropdown-item" href="#">
                <Link to="/parts" onClick={(e) => setValue(e.target.innerHTML)}>Monitor</Link>
              </button>
            </div>
          </div>
          <button type="button" className="form-control ml-5" onClick={() => { dir(); }}>
            Order By Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
