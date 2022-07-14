import React, {useEffect , useState} from 'react'
import { Container, Nav, Navbar, Image, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import logo from '../Assets/LandingPageImg/Logo.png'

import './NavBar.css';
import '../LandingPage/LandingPage.css';

const NavBar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible,setVisible] = useState (true);

    // nav function 
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos- currentScrollPos > 70) ||
        currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    // new useEffect
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
    <div>
        <div className="navForLandingPage">

    <Navbar collapseOnSelect id="nav" expand="lg" className='navbar' style={{top: visible ? '-120px' : '0'}}>
        <Container>
            <Navbar.Brand href="#home"> <Image className="logo" src={logo} /> <span className='title1'>Sistem Pembayaran Sekolah</span><span className='title2'>SPS</span>  </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                </Nav>
                <Nav className='nav'>
                    <Nav.Link href="#home"> <h6>Home</h6>  </Nav.Link>
                    <Nav.Link href="#beranda"> <h6>Beranda</h6> </Nav.Link>
                    <Nav.Link href="#features"> <h6>Features</h6> </Nav.Link>
                    <Link to="/admin/login">
                        <Nav.Link href="/admin/login"> <Button className='btn-login'>Log in</Button></Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>


</div>
</div>
  )
}

export default NavBar;