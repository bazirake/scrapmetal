import React from 'react'
import 'bootstrap'
import './Header.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faQuestion,faAddressCard,
faInfoCircle,faHome,faCar,faPen, faCartPlus,faSignIn} from '@fortawesome/free-solid-svg-icons'
import {Nav,Navbar,Container,NavDropdown,Form,Row} from 'react-bootstrap';
const Header = () =>{
  return(
  <Container fluid>
  <Row className='nav-header '>
  <div className='col d-flex  justify-content-start'>
  <Navbar.Brand href="#"><img className='logoim' src='./image/logo4.png' />
  <span className='text-white '>Scrap metal recycling system</span></Navbar.Brand>
    </div>
    <div className='col d-flex justify-content-end'>
     <Nav.Link className='menu1' href="/login"><span><FontAwesomeIcon icon={faSignIn} /></span>SignIn</Nav.Link>
     <Nav.Link className='menu1' href="/register"><span><FontAwesomeIcon icon={faPen} /></span>Register</Nav.Link>
    </div>
  </Row>
  < Row>
  <Navbar className='nav-bar' expand="lg">
  
     <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
        <Nav
         className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
          >
         <Nav.Link href="/"><span><FontAwesomeIcon icon={faHome} /></span>Home</Nav.Link>
         <Nav.Link href="/about"><span><FontAwesomeIcon icon={faInfoCircle} /></span>About</Nav.Link>
         <Nav.Link href="/help">
          <span><FontAwesomeIcon icon={faAddressCard}/></span>Contact</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
             <NavDropdown.Item href="#buyer">Iron Metal</NavDropdown.Item>
             <NavDropdown.Item href="#buyer">Silver Metal</NavDropdown.Item>
             <NavDropdown.Item href="#buyer">Zinc Metal</NavDropdown.Item>
             <NavDropdown.Item href="#buyer">Gold Metal</NavDropdown.Item>
             <NavDropdown.Divider/>
            </NavDropdown>
             <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#buyer">Delivery info</NavDropdown.Item>
              <NavDropdown.Item href="#seller">
               Advertisement
              </NavDropdown.Item>
              <NavDropdown.Item href="#seller">
               Policy &amp; Privacy
              </NavDropdown.Item>
              <NavDropdown.Item href="#seller">
               Blog articles
              </NavDropdown.Item>
              <NavDropdown.Divider/>
            </NavDropdown> 
              <Nav.Link href="/help">Help<span><FontAwesomeIcon icon={faQuestion} /></span></Nav.Link>
            <Nav.Link href="/login"><span><FontAwesomeIcon icon={faSignIn} /></span>SignIn</Nav.Link>
            <Nav.Link href="/register"><span><FontAwesomeIcon icon={faPen} /></span>Register</Nav.Link>
            <Nav.Link href="/order"><span><FontAwesomeIcon icon={faCar}/></span>Orders</Nav.Link>
            <Nav.Link href="/buyer"><span><FontAwesomeIcon icon={faCartPlus}/>
            <span className='badge'>0</span></span>
           </Nav.Link>
          </Nav>

      <Form className="d-flex">
      <div class="input-group">
    <input type="text" class="form-control" placeholder="Search term" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
     <div class="input-group-append">
     <button class="btn btn-secondary" type="submit">
       <i className='fa fa-search'></i></button>
   </div>
   </div>
   </Form>
    </Navbar.Collapse>
  </Navbar>
  </Row>
  </Container>
)
}
export default Header
