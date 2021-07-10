import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

const Motto = () => {
    return (
        <Container  >
            <Row className=" mt-5 mb-5 d-flex justify-content-center ">
                <Col xs={6} md={4} className="d-flex justify-content-center">
                    <Image src="/pictures/rye.png" alt="rye picture" fluid />
                </Col>
            </Row>
            <Row className="text-center mt-5 mb-5 ">
                <Col >
                    <h1 style={{ color: "#FF7518" }}>
                        Makes Your Baking Better Tasting
                    </h1>
                    <h5>
                        <strong>
                            Use my Bread Calculator. It’s has Baker’s Math built-in
                        </strong>
                    </h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Motto
