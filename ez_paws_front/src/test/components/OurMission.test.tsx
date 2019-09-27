import React from 'react';
import { shallow } from 'enzyme';

import OurMission from '../../components/OurMission';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<OurMission />);
})

describe('<OurMission />', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders correct content', () => {

  });
});
