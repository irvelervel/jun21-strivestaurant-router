import { Button, Container, Row, Col, Badge } from 'react-bootstrap'
import menu from '../data/menu.json'
import { Link } from 'react-router-dom'

const Menu = ({ history }) => (
    <Container>
        <Row className="justify-content-center my-2 text-center">
            <Col md={8}>
                <Button onClick={() => history.push('/')}>GO HOME</Button>
            </Col>
        </Row>
        {/* history.push is used for programmatically redirect the user to a specific route */}
        {/* history.replace does the same thing but without giving the user the ability to go back */}
        {
            menu.map(pasta => (
                <Row className="justify-content-center my-2 text-center" key={pasta.id}>
                    <Col md={8}>
                        <Link to={"/details/" + pasta.id}>
                            <img src={pasta.image} alt="pasta dish" />
                        </Link>
                        <h4>
                            {pasta.name}
                            <Badge variant="warning" className="mx-2">{pasta.price + "€"}</Badge>
                            <Badge variant="danger">{pasta.label}</Badge>
                        </h4>
                    </Col>
                </Row>
            ))
        }
    </Container>
)

export default Menu