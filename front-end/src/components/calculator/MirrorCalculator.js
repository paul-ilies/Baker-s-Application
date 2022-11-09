import React, { memo } from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useCalcGlobalContext } from "../../context/ContextCalculator";
import { firstLetterUppercase, HIDRATION } from "../../utils/utils";

const MirrorCalculator = () => {
  const [state] = useCalcGlobalContext();
  const ingredients = { ...state };

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
                return (
                  <ListGroup.Item
                    key={name}
                    as="li"
                    style={{
                      color: name === HIDRATION ? "#FF7518" : "black",
                      fontWeight: name === HIDRATION ? "bold" : "normal",
                      fontSize: name === HIDRATION ? "1.25rem" : "1rem",
                      textAlign: name === HIDRATION ? "center" : "left",
                    }}
                  >
                    <strong>{`${firstLetterUppercase(name)}:`}</strong>
                    {name === HIDRATION
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

export default memo(MirrorCalculator);
