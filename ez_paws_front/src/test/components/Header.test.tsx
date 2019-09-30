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
let user = 'Guest';

beforeEach(() => {
  wrapper = shallow(<Header user={user}/>);
});

describe('<Header />', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders correct content', () => {
    it('Renders Ez Paws logo', () => {
        expect(wrapper.find('.NavbarLogo')).toHaveLength(1);
    });

    it('Renders Signed out menu by default', () => {
      expect(wrapper.find('.SignedOutMenu')).toHaveLength(1);
    });

    it('Renders signed in menu when user is there', () => {
      user = 'user'
      wrapper = shallow(<Header user={user}/>);
      expect(wrapper.find('.SignedInMenu')).toHaveLength(1);
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
