import React from 'react';
import { 
  mount,
  shallow
} from 'enzyme';
import { MemoryRouter } from 'react-router';

import WrapperComponent from '../../components/WrapperComponent';
import Home from '../../components/Home';
import NotFound from '../../components/NotFound';
import OurMission from '../../components/OurMission';

let wrapperShallow;
let wrapper;

beforeEach(() => {
  wrapperShallow = shallow(<WrapperComponent />);
  wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <WrapperComponent />
    </MemoryRouter>
  );
})

describe('<WrapperComponent />', () => {
  it('Renders correctly', () => {
    expect(wrapperShallow).toMatchSnapshot();
  });

  describe('Routing works correctly', () => {
    it('Renders <Home /> initially', () => {
      expect(wrapper.find(Home)).toHaveLength(1);
    });

    it('Renders <NotFound /> when given incorrect path', () => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
          <WrapperComponent />
        </MemoryRouter>
      );
      expect(wrapper.find(NotFound)).toHaveLength(1);
    });

    it('Renders <OurMission /> when given /OurMission', () => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ '/OurMission' ]}>
          <WrapperComponent />
        </MemoryRouter>
      );
      expect(wrapper.find(OurMission)).toHaveLength(1);
    });
  });
});
