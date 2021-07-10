import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaginaInexistenta = ({ children }) => {

    return (
        <Container
            style={{ minHeight: "80vh", maxWidth: "80vw" }}>
            <Row className="mt-5">
                <Col lg={12} className="d-flex justify-content-center align-items-center">
                    {children}
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <Button
                            variant="warning"
                            size="lg"
                            className="rounded my-3">
                            Go Home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PaginaInexistenta
