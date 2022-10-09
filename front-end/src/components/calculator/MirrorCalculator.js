import React from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useCalcGlobalContext } from "../../context/ContextCalculator";

const MirrorCalculator = () => {
  const { state: ingredients } = useCalcGlobalContext();

  return (
    <Card className="shadow-lg p-3 mb-5  bg-white rounded h-100">
      <Card.Body>
        <Card.Title>
          <h3 className="text-center" style={{ color: "#FF7518" }}>
            TOTALS
          </h3>
        </Card.Title>
        <Row>
          <Col lg={12}>
            <ListGroup as="ul" variant="flush">
              {Object.keys(ingredients).map((name, index) => {
                console.log(name);
                return (
                  <ListGroup.Item
                    key={index}
                    as="li"
                    style={{
                      color: name === "Hidration" ? "#FF7518" : "black",
                      fontWeight: name === "Hidration" ? "bold" : "normal",
                      fontSize: name === "Hidration" ? "1.25rem" : "1rem",
                      textAlign: name === "Hidration" ? "center" : "left",
                    }}
                  >
                    <strong>{`${name}:`}</strong>
                    {name === "Hidration"
                      ? ` ${ingredients[name]} %`
                      : ` ${ingredients[name]} g`}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center ">
          <Col lg={12} className="d-flex justify-content-center">
            <Image
              src="/pictures/flourBag.png"
              alt="flour bag"
              width={150}
              heigth={150}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MirrorCalculator;
