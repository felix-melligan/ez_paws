import React from 'react';
import { 
  mount,
  shallow
} from 'enzyme';

import WrapperComponent from '../components/WrapperComponent';
import Home from '../components/Home';

let wrapperShallow;
let wrapper;

beforeEach(() => {
  wrapperShallow = shallow(<WrapperComponent />);
  wrapper = mount(<WrapperComponent />);
})

describe('<WrapperComponent />', () => {
  it('Renders correctly', () => {
    expect(wrapperShallow).toMatchSnapshot();
  });

  it('Renders the Home page initially', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
