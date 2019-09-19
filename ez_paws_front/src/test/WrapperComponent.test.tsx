import React from 'react';
import ReactDOM from 'react-dom';
import WrapperComponent from '../components/WrapperComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrapperComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
