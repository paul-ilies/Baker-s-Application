import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    //declarare variabila ce contine anul curent
    const currentDate = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; <strong>Ilies Paul Daniel</strong> {currentDate}
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-muted'>
                        Proiect Disertatie Informatica Aplicata si Programare
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer


