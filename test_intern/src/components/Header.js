import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; 
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { Link } from 'react-router-dom';

const Header = () => {
  React.useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <Navbar expand="lg" className="px-5 mt-5" style={{ backgroundColor: 'white' }}>
      <Container className='light' data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="d-flex align-items-center logo-container" data-aos="zoom-in-left" data-aos-delay="400">
            <img src="logo.png" alt="Logo" />
          </Navbar.Brand>
          <div className="d-xs-block d-lg-none mx-auto-btn">
            <Button 
              variant="" 
              className="request-demo-btn px-4 fw-bold" 
              style={{
                borderRadius: '40px',
                padding: '1rem 1.5rem',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
                color: '#5B5B5B',
                marginLeft: '35px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A254FF';
                e.currentTarget.style.color = 'white'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'; 
                e.currentTarget.style.color = '#5B5B5B'; 
              }}
              data-aos="zoom-in-right" data-aos-delay="400"
            >
            <Link to="/auth/login" className='text-decoration-none text-dark'>Login <FaArrowRight className="ml-2" /> </Link>
            </Button>
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" data-aos="zoom-in-right" data-aos-delay="400"/>
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '10%' }}>
          <Nav className="ml-auto" style={{ backgroundColor: 'transparent' }} data-aos="zoom-in-right" data-aos-delay="400">
            <Nav.Link 
              href="#about" 
              style={{ color: '#5B5B5B' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#A254FF'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#5B5B5B'}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#help" 
              style={{ color: '#5B5B5B' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#A254FF'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#5B5B5B'}
            >
              Help
            </Nav.Link>
            <Nav.Link 
              href="#features" 
              style={{ color: '#5B5B5B' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#A254FF'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#5B5B5B'}
            >
              Features
            </Nav.Link>
            <Nav.Link 
              href="#signup" 
              style={{ color: '#5B5B5B' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#A254FF'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#5B5B5B'}
            >
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-block">
          <Button 
            variant="light" 
            className="request-demo-btn ml-auto fw-bold px-4" 
            style={{
              borderRadius: '40px',
                padding: '1rem 1.5rem',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
                color: '#5B5B5B',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A254FF';
              e.currentTarget.style.color = 'white'; 
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white'; 
              e.currentTarget.style.color = '#5B5B5B'; 
            }}
          >
            <Link to="/auth/login" className='text-decoration-none text-dark'>Login <FaArrowRight className="ml-2" /> </Link>
          </Button>
        </div>
      </Container>
      <style jsx>{`
        @media (max-width: 576px) {
          .navbar-collapse {
            background-color: #4ED1B3; /* Background color for xs screens */
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
