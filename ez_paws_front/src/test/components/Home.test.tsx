import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../components/Home';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
})

describe('<Home />', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders correct content', () => {

  });
});
