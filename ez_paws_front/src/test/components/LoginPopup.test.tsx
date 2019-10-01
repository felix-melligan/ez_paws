import React from 'react';
import { 
  shallow,
} from 'enzyme';

import LoginPopup from '../../components/LoginPopup';

let wrapper;

const props = {
    show: false,
    onHide: () => {},
};

beforeEach(() => {
    wrapper = shallow(<LoginPopup {...props}/>);
});

describe('LoginPopup', () => {
    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('Handlers work correctly', () => {
        it('Changes the state of password when value is typed into form', () => {
            const password = 'password';

            expect(wrapper.state().password).toEqual('');

            const form = wrapper.find('.SignInFormPassword');
            form.simulate('change', { target: { type: password, value: password } })

            expect(wrapper.state().password).toEqual(password);
        });

        it('Changes the state of email when value is typed into form', () => {
            const email = 'email';

            expect(wrapper.state().email).toEqual('');

            wrapper.find('.SignInFormEmail').simulate('change', { target: { type: email, value: email }});
            
            expect(wrapper.state().email).toEqual(email);
        });
    });
});