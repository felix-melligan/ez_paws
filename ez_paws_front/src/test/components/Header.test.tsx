import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../components/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Router><Header /></Router>);
})

describe('<Header />', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders correct content', () => {
    it('Renders Ez Paws logo', () => {
        expect(wrapper.find(''))
    });
  });
});
