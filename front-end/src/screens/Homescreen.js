import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IntrebariFrecvente from '../componente/acordeon/IntrebariFrecvente'
import Calculator from '../componente/calculator/Calculator'
import MirrorCalculator from '../componente/calculator/MirrorCalculator'
import Motto from '../componente/motto/Motto'

const Homescreen = () => {
    return (
        <article>
            <section>
                <Motto />
            </section>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Calculator />
                        </Col>
                        <Col>
                            <MirrorCalculator />
                        </Col>
                    </Row>
                    <section>
                        <Row>
                            <Col>
                                <IntrebariFrecvente />
                            </Col>
                        </Row>
                    </section>
                </Container>
            </section>
        </article>
    )
}

export default Homescreen
