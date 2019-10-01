import React, { Component } from 'react';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

type MyProps = {
    show: boolean,
    onHide: () => void,
};

type MyState = {
    email: string,
    password: string
};

class LoginPopup extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    };

    handleSubmit(): void {
        this.props.onHide();
    };

    handleFormChange(event: any): void {
        const state: string = event.target.type;
        const updatedValue: string = event.target.value;
        this.setState({
            [state]: updatedValue
        } as any);
    };

    render() {
        return (
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Login / SignUp
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                    Existing users: Please use the form to log in.
                </p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className='SignInFormEmail'
                            value={this.state.email}
                            onChange={this.handleFormChange}
                            type="email"
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className='SignInFormPassword'
                            value={this.state.password}
                            onChange={this.handleFormChange}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                </Form>
                <p>
                    New users: Please click the "SignUp" link below to create an account.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button className='LoginPopupSignUpButton' as={Link} to='/SignUp' onClick={this.props.onHide}>SignUp</Button>
                <Button className='LoginPopupCloseButton' variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal>
        );
    };
}

export default LoginPopup;