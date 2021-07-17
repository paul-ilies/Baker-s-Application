import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loader from "../componente/utile/Loader"
import PaginaInexistenta from './PaginaInexistenta';
import scrollToTop from '../componente/utile/utile'

const Retete = () => {

    const [retete, setRetete] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getRecipes() {
            await axios.get("/recipes")
                .then(res => {
                    setRetete(res.data)
                    setTimeout(() => {
                        setLoading(false)
                    }, 500)
                })
                .catch(error => {
                    if (error) {
                        setLoading(false)
                        setError(true)
                    }
                })
        }
        getRecipes()

    }, [])


    if (loading) {
        return <Loader />
    }
    if (error) {
        return <PaginaInexistenta>
            <h1>Something went wrong</h1>
        </PaginaInexistenta>
    }

    return (
        <React.Fragment>
            {loading ? <Loader /> :
                <Container>
                    <h1
                        className="text-center my-5"
                        style={{ color: "#FF7518", textTransform: "uppercase" }}>
                        "everything we bake, we bake with love"
                    </h1>
                    <Row >
                        {
                            retete.map(reteta => {
                                return (
                                    <Col sm={12} md={6} lg={4} xl={4} key={reteta._id} className="my-3" >
                                        <Card
                                            className="my- p-3 rounded shadow-lg p-3 mb-5 bg-white rounded h-100 text-center" >
                                            <Link to={`/dough/${reteta._id}`}>
                                                <Card.Img
                                                    src={reteta.image}
                                                    alt={reteta.name}
                                                    variant="top" />
                                            </Link>
                                            <Card.Body>
                                                <Card.Title as="div">
                                                    <strong>
                                                        {reteta.name}
                                                    </strong>
                                                </Card.Title>
                                                <Card.Text as="p" style={{ textTransform: "uppercase" }}>
                                                    {reteta.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Link
                                                to={`/recipes/${reteta._id}`}
                                                style={{ textDecoration: "none" }}>
                                                <Button
                                                    onClick={scrollToTop}
                                                    variant="warning"
                                                    size="lg"
                                                    block
                                                    className="rounded ">Find recipe
                                                </Button>
                                            </Link>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            }
        </React.Fragment>
    )
}

export default Retete
