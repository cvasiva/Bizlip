import React from 'react';
import {Link} from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand,Container } from 'reactstrap';

const Heading = () => {
  return (
    <Navbar color='dark' dark>
        <Container className='d-flex'>
            <NavbarBrand href='/'>my Team</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className='btn btn-primary' to='/add'>Add User</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Heading
