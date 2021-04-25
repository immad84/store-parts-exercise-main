// @flow

import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-empty-pattern
function ListParts({ partsList }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {partsList.map((item) => (
        <div className="d-flex justify-content-between p-3 mb-2 border border-1 inner" key={item.id}>
          <div className="">{item.name}</div>
          <div className="">{item.type}</div>
          <div className="">{item.price}</div>
        </div>
      ))}
    </div>
  );
}

ListParts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  partsList: PropTypes.array.isRequired,
};

export default ListParts;
