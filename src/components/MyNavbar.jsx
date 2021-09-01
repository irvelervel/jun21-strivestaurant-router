// First way
import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

// Second way
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// this last import method is slightly more efficient for react-bootstrap

// import {} is for components that are not exported as DEFAULT

const MyNavbar = ({ title, color, history, location, match }) => {
    // props is an object
    // {
    //   title: 'Strivestaurant'
    //   color: 'dark
    // }
    return (
        <Navbar onClick={(e) => console.log('clicked!', e)} collapseOnSelect expand="lg" bg={color} variant={color}>
            <Link to="/">
                <Navbar.Brand>{title} - Strive for food</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/menu">
                        <div className={
                            location.pathname === '/menu'
                                ? "nav-link active"
                                : "nav-link"
                        }>Menu</div>
                        {/* <div className={"nav-link" + location.pathname === '/reservations' ? ' active' : ''}>Reservations</div> */}
                    </Link>
                    <Link to="/reservations">
                        <div className={
                            location.pathname === '/reservations'
                                ? "nav-link active"
                                : "nav-link"
                        }>Reservations</div>
                        {/* <div className={"nav-link" + location.pathname === '/reservations' ? ' active' : ''}>Reservations</div> */}
                    </Link>
                    <Nav.Link href="#pricing">Find us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(MyNavbar)
// I'm again creating a HOC -> High Order Component
// withRouter is enriching whatever component you're giving to it
// with history, location and match