import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NotFound />);
})

describe('<NotFound />', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders correct content', () => {

  });
});
