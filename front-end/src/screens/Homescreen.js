import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FAQ from "../components/acordeon/FAQ";
import Calculator from "../components/calculator/Calculator";
import MirrorCalculator from "../components/calculator/MirrorCalculator";
import Motto from "../components/motto/Motto";

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
                <FAQ />
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </article>
  );
};

export default Homescreen;
