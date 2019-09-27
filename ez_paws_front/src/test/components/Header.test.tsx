import React from 'react';
import { 
  shallow,
  mount
} from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import Header from '../../components/Header';
import Home from '../../components/Home';
import WrapperComponent from '../../components/WrapperComponent';

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
        expect(wrapper.find('.NavbarLogo'));
    });
  });

  describe('Buttons have correct functionality', () => {
    it('Logo button routes to <Home />', () => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
          <WrapperComponent />
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(0);

      wrapper.find('.NavbarLogoLink').at(0).simulate('click', { button: 0 });

      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
});
