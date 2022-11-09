import React, { memo } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./calculator.css";
import { useCalcGlobalContext } from "../../context/ContextCalculator";
import {
  defaultState,
  firstLetterUppercase,
  GET_VALUES,
  maxValues,
  RESET_VALUES,
  SALT,
  YEAST,
} from "../../utils/utils";
const Calculator = () => {
  const [state, dispatch] = useCalcGlobalContext();
  const ingredients = { ...state };
  return (
    <Card className="shadow-lg p-3 mb-5 bg-white rounded h-100">
      <Card.Body>
        <Card.Title>
          <h3 className="text-center" style={{ color: "#FF7518" }}>
            Simple Dough Calculator
          </h3>
        </Card.Title>
        <Form>
          {Object.keys(ingredients).map((name) => {
            return (
              <Form.Group key={name}>
                <Form.Label htmlFor={name}>
                  {firstLetterUppercase(name)}
                </Form.Label>
                <Row>
                  <Col lg={4}>
                    <Form.Control
                      id={name}
                      as="input"
                      type="number"
                      inputMode="numeric"
                      min="0"
                      max={maxValues(name)}
                      readOnly={name === YEAST || name === SALT ? true : false}
                      name={name}
                      value={
                        ingredients[name] > +maxValues(name)
                          ? +maxValues(name, ingredients[name])
                          : ingredients[name]
                      }
                      onChange={(event) =>
                        dispatch({ type: GET_VALUES, payload: event })
                      }
                    />
                  </Col>
                  <Col className="my-auto">
                    <Form.Control
                      type="range"
                      min="0"
                      max={maxValues(name)}
                      disabled={name === YEAST || name === SALT ? true : false}
                      name={name}
                      value={
                        ingredients[name] > +maxValues(name)
                          ? +maxValues(name)
                          : ingredients[name]
                      }
                      onChange={(event) =>
                        dispatch({ type: GET_VALUES, payload: event })
                      }
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
                onClick={() =>
                  dispatch({
                    type: RESET_VALUES,
                    payload: defaultState,
                  })
                }
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

export default memo(Calculator);
