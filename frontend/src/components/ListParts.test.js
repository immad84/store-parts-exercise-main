import React from 'react';
import ReactDom from 'react-dom';
import ListParts from './ListParts';

const list = {
  name: 'mouse 1',
  type: 'mouse',
  price: '10$',
  id: 0,
};

// eslint-disable-next-line no-undef
it('renders without crash', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDom.render(<ListParts partsList={[list]} />, div);
  ReactDom.unmountComponentAtNode(div);
});
