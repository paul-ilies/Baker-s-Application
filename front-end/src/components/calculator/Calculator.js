import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./calculator.css";
import { useCalcGlobalContext } from "../../context/ContextCalculator";

const Calculator = () => {
  const { state: ingredients, onChange, resetHandle } = useCalcGlobalContext();

  return (
    <Card className="shadow-lg p-3 mb-5 bg-white rounded h-100">
      <Card.Body>
        <Card.Title>
          <h3 className="text-center" style={{ color: "#FF7518" }}>
            Simple Dough Calculator
          </h3>
        </Card.Title>
        <Form>
          {Object.keys(ingredients).map((name, index) => {
            return (
              <Form.Group key={index}>
                <Form.Label>{name}</Form.Label>
                <Row>
                  <Col lg={4}>
                    <Form.Control
                      as="input"
                      type="number"
                      inputMode="numeric"
                      min="0"
                      max={
                        name === "Flour"
                          ? "2000"
                          : name === "Water"
                          ? "1600"
                          : name === "Hidration"
                          ? "80"
                          : name === "Yeast"
                          ? "40"
                          : name === "Salt"
                          ? "40"
                          : "0"
                      }
                      readOnly={
                        name === "Yeast" || name === "Salt" ? true : false
                      }
                      name={name}
                      value={ingredients[name]}
                      onChange={onChange}
                    />
                  </Col>
                  <Col className="my-auto">
                    <Form.Control
                      type="range"
                      min="0"
                      max={
                        name === "Flour"
                          ? "2000"
                          : name === "Water"
                          ? "1600"
                          : name === "Hidration"
                          ? "80"
                          : name === "Yeast"
                          ? "40"
                          : name === "Salt"
                          ? "40"
                          : "0"
                      }
                      disabled={
                        name === "Yeast" || name === "Salt" ? true : false
                      }
                      name={name}
                      value={ingredients[name]}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
            );
          })}
          <Row className="mt-5">
            <Col>
              <Button
                variant="warning"
                size="lg"
                block
                className="rounded"
                onClick={resetHandle}
              >
                Clear Selections
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Calculator;
