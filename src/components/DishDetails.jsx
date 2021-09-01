import { useEffect, useState } from "react"
import { Alert, Container, Row, Col, Spinner } from "react-bootstrap"
import menu from '../data/menu.json'

const DishDetails = ({ match }) => {

    // 1) we're looking for the corresponding pasta with the id stored in match.params.dishId
    // 2) we're going to store it into the state of our component
    // 3) when we're having it into the local state, we can bind our UI to it

    // 2)
    const [selectedDish, setSelectedDish] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // 1)
        // here we're gonna fetch the right pasta object
        console.log(match.params.dishId)
        let rightDishToShow = menu.find(pasta => pasta.id === parseInt(match.params.dishId))
        console.log(rightDishToShow)
        setSelectedDish(rightDishToShow)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
        // fake loading wait ;)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    {/* 3) */}
                    <div className="text-center mt-5">
                        {
                            isLoading
                                ? <Spinner animation="border" variant="success" />
                                : selectedDish ? // did you know you can nest ternary operators? ;)
                                    <>
                                        <h2>{selectedDish.name} details:</h2>
                                        <img src={selectedDish.image} className="my-3" alt=" pasta dish" />
                                        <p>{selectedDish.description}</p>
                                        <strong>{selectedDish.price}€</strong>
                                    </>
                                    : <Alert variant="danger" className="mt-5 text-center">404 - Pasta not found</Alert>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DishDetails