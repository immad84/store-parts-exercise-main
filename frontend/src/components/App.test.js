import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// eslint-disable-next-line no-undef
it('renders without crash', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
