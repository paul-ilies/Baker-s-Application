import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col, ListGroup, Button, Table } from 'react-bootstrap';
import axios from "axios";
import Loader from "../componente/utile/Loader"
import PaginaInexistenta from "./PaginaInexistenta"
import ScrollUpButton from "react-scroll-up-button"

const Reteta = ({ match }) => {

    const [reteta, setReteta] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {

        async function getRecipe() {
            await axios.get(`/recipes/${match.params.id}`)

                .then(res => {
                    setReteta(res.data)
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
        getRecipe()

    }, [match.params.id])


    if (loading) {
        return <Loader />
    }
    if (error) {
        return <PaginaInexistenta>
            <h1>Recipe not found</h1>
        </PaginaInexistenta>
    }
    return (
        <Container>
            <Link to='/recipes' style={{ textDecoration: "none" }}>
                <Button
                    variant="warning"
                    size="lg"
                    block
                    className="rounded my-3"
                >Go back
                </Button>
            </Link>
            <h1
                className="text-center my-5"
                style={{ color: "#FF7518" }}>
                {reteta.name}
            </h1>
            <Row >
                <Col
                    lg={12}
                    key={reteta._id}
                    className="my-2 ml-auto">
                    {/* Start implementare afisare mod CARD */}
                    <Card className="my- p-3 rounded shadow-lg p-3 mb-5 bg-white rounded h-100 text-center " >
                        <Card.Img
                            className="mx-auto rounded"
                            src={reteta.image}
                            alt={reteta.name}
                            variant="top"
                            style={{
                                maxWidth: "30rem",
                                maxHeight: "30rem"
                            }} />
                        <Card.Body>
                            <Card.Title
                                as="p">
                                <strong
                                    style={{ color: "#FF7518", textTransform: "uppercase" }} >
                                    {reteta.description}
                                </strong>
                            </Card.Title>
                            <ListGroup
                                variant="flush"
                                className="my-5">
                                <ListGroup.Item>
                                    <strong
                                        style={{ color: "#FF7518" }}>
                                        Bulk Fermentation:
                                    </strong>
                                    <br />
                                    {reteta.bulkFermentatiom}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong
                                        style={{ color: "#FF7518" }}>
                                        Proof Time:
                                    </strong>
                                    <br />
                                    {reteta.proofTime}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong
                                        style={{ color: "#FF7518" }}>
                                        Sample Schedule:
                                    </strong>
                                    <br />
                                    {reteta.sampleSchedule}
                                </ListGroup.Item>
                            </ListGroup>
                            {/* Start listare ingrediente */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ color: "#FF7518" }}>Ingredients</th>
                                        <th style={{ color: "#FF7518" }}>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Flour</td>
                                        <td>{reteta.flour}g</td>
                                    </tr>
                                    <tr>
                                        <td>Water</td>
                                        <td>{reteta.water}ml</td>
                                    </tr>
                                    <tr>
                                        <td>Salt</td>
                                        <td>{reteta.salt}g</td>
                                    </tr>
                                    <tr>
                                        <td>Instant dry yeast</td>
                                        <td>{reteta.instantYeast}g</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>
                                <strong
                                    style={{ color: "#FF7518" }}>
                                    PREPARATION
                                </strong>
                            </Card.Title>
                            <ListGroup variant="flush" className="my-5">
                                {reteta.stepOne
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepOne}
                                        </strong>
                                        <br />
                                        {reteta.stepOneDescription}
                                    </ListGroup.Item>}
                                {reteta.stepTwo
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepTwo}
                                        </strong>
                                        <br />
                                        {reteta.stepTwoDescription}
                                    </ListGroup.Item>}
                                {reteta.stepThree
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepThree}
                                        </strong>
                                        <br />
                                        {reteta.stepThreeDescription}
                                    </ListGroup.Item>}
                                {reteta.stepFour
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepFour}
                                        </strong>
                                        <br />
                                        {reteta.stepFourDescription}
                                    </ListGroup.Item>}
                                {reteta.stepFive
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepFive}
                                        </strong>
                                        <br />
                                        {reteta.stepFiveDescription}
                                    </ListGroup.Item>}
                                {reteta.stepSix
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepSix}
                                        </strong>
                                        <br />
                                        {reteta.stepSixDescription}
                                    </ListGroup.Item>}
                                {reteta.stepSeven
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepSeven}
                                        </strong>
                                        <br />
                                        {reteta.stepSevenDescription}
                                    </ListGroup.Item>}
                                {reteta.stepEight
                                    &&
                                    <ListGroup.Item>
                                        <strong
                                            style={{ color: "#FF7518" }}>
                                            {reteta.stepEight}
                                        </strong>
                                        <br />
                                        {reteta.steptEightDescription}
                                    </ListGroup.Item>}
                            </ListGroup>
                            <ScrollUpButton ShowAtPosition={500}
                                style={{ backgroundColor: " #FF7518", outline: "none" }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Reteta
