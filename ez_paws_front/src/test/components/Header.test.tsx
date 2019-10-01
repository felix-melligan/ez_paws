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
import LoginPopup from '../../components/LoginPopup';

let wrapper;
let wholePageWrapper;
let user;

beforeEach(() => {
  user = 'Guest';
  wrapper = shallow(<Header user={user}/>);
  wholePageWrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <WrapperComponent />
    </MemoryRouter>
  );
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
      expect(wholePageWrapper.find(Home)).toHaveLength(0);

      wholePageWrapper.find('.NavbarLogoLink').at(0).simulate('click', { button: 0 });

      expect(wholePageWrapper.find(Home)).toHaveLength(1);
    });
  });

  describe('Handlers work correctly', () => {
    it('Handler handleShowLoginPopup changes loginPopupShow state to true and shows popup', () => {
      expect(wrapper.state().loginPopupShow).toBeFalsy();

      wrapper.find('.NavbarSignInButton').at(0).simulate('click', { button: 0 });

      expect(wrapper.state().loginPopupShow).toBeTruthy();
      expect(wrapper.find(LoginPopup)).toHaveLength(1);
    });

    it('Handler handleHideLoginPopup changes loginPopupShow state to false and hides popup', () => {
      expect(wholePageWrapper.find(Header).state().loginPopupShow).toBeFalsy();
      wholePageWrapper.find('.NavbarSignInButton').at(0).simulate('click', { button: 0 });
      expect(wholePageWrapper.find(Header).state().loginPopupShow).toBeTruthy();
      
      wholePageWrapper.find('.LoginPopupCloseButton').at(0).simulate('click', { button: 0 });
      expect(wholePageWrapper.find(Header).state().loginPopupShow).toBeFalsy();
    });
  });
});
