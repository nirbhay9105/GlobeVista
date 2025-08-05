import React, { useEffect, useState } from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expand='lg' className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='brand-link'>
                        <FontAwesomeIcon icon={faMountainSun} size='lg' className='me-2 brand-icon' />
                        <span className='brand-name'>GlobeVista</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='toggle-btn' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto nav-links'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/holidays' className='nav-link'>Holidays</Link>
                        <Link to='/city-breaks' className='nav-link'>City Breaks</Link>
                        <Link to='/destinations' className='nav-link'>Destinations</Link>
                        <Link to='/login' className='signin-btn'>Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
