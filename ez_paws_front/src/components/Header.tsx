import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import LoginPopup from './LoginPopup';

type MyProps = {
    user: string
};

type MyState = {
    loginPopupShow: boolean,
};

class Header extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);

        this.state = {
            loginPopupShow: false,
        };

        this.handleShowLoginPopup = this.handleShowLoginPopup.bind(this);
        this.handleHideLoginPopup = this.handleHideLoginPopup.bind(this);
    }

    handleShowLoginPopup(): void {
        this.setState({
            loginPopupShow: true
        });
    };

    handleHideLoginPopup(): void {
        this.setState({
            loginPopupShow: false
        });
    };
    
    render() {
        return(
            <Navbar className='Navbar' sticky='top' bg="light" expand="lg">
                <Navbar.Brand className='NavbarBrand'>
                    <Link className='NavbarLogoLink' to='/'>
                        <img
                            className='NavbarLogo'
                            src={process.env.PUBLIC_URL + './images/ez_paws_logo.ico'}
                            alt='EZ Paws Logo'
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/OurMission'>Our Mission</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {this.renderUserNav(this.props.user)}
                </Navbar.Collapse>
                <LoginPopup show={this.state.loginPopupShow} onHide={this.handleHideLoginPopup} />
            </Navbar>
        );
    };

    renderUserNav(user) {
        const userIconSize = 20;

        if(user !== 'Guest') {
            return(
                <NavDropdown
                    className='SignedInMenu' 
                    title={
                        <FaUserCircle className='NavbarUserIcon' size={userIconSize}/>
                    }
                    id="basic-nav-dropdown"
                    alignRight
                >
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                </NavDropdown>
            );
        } else {
            return(
                <NavDropdown
                    className='SignedOutMenu' 
                    title={
                        <FaUserCircle className='NavbarUserIcon' size={userIconSize}/>
                    }
                    id="basic-nav-dropdown"
                    alignRight
                >
                    <NavDropdown.Item className='NavbarSignInButton' onClick={this.handleShowLoginPopup}>Login/Signup</NavDropdown.Item>
                </NavDropdown>
            );
        }
    };
}

export default Header;