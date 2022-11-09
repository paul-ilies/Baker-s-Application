import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const faqList = [
  {
    id: 1,
    question: "UNDERSTANDING BAKER’S PERCENTAGES",
    explanation:
      "With baker’s percentages, all ingredients in a recipe are stated as percentages of the total flour weight.The total amount of flour is always 100 percent(including a combination of flours).If the amount of flour in a recipe is 1,000 grams and the amount of water is 700 grams, water makes up 70 percent of the flour weight.So this simple recipe could be expressed as 100 percent 70 percent water, 2 percent salt, and 2 percent yeast.This allows recipes to be scaled up or down easily: whatever the flour weight, the other ingredients can simply be measured as the expressed percentage of the flour weight, whether the amount of flour is 500 grams or 5,000 grams.",
  },
  {
    id: 2,
    question: "DOUGH HIDRATION",
    explanation:
      "In a recipe, the baker's percentage for water is referred to as the hydration; it is indicative of the stickiness of the dough and the crumb of the bread. Lower hydration rates (e.g., 50–57%) are typical for bagels and pretzels, and medium hydration levels (58–65%) are typical for breads and rolls.Higher hydration levels are used to produce more and larger holes, as is common in artisan breads such as baguettes or ciabatta. Doughs are also often classified by the terms stiff, firm, soft, and slack.Batters are more liquid doughs. Muffins are a type of drop batter while pancakes are a type of pour batter.",
  },
  {
    id: 3,
    question: "HOW TO USE THE SIMPLE DOUGH CALCULATOR",
    explanation:
      "This calculator was build to measure the quantity of ingredients based on the traditional baker's math: Flour: 100%, Salt & Yeast: 2% from 100% Flour, Water: based on your recipe hidration.\n        Either type the hidration percentage and type the flour quantity either type the quantity of flour and select de percentage of the hidration.",
  },
];

const FAQ = () => {
  const [faq, setFaq] = useState(() => faqList);

  return (
    <div className="my-5">
      <h1 className="my-5 text-center">
        <strong>Frequently Asked Questions </strong>
        <IconContext.Provider value={{ color: "#FF7518" }}>
          <FaQuestion />
        </IconContext.Provider>
      </h1>
      {faq.map((el) => {
        return (
          <Accordion
            defaultActiveKey="0"
            key={el.id}
            className="rounded"
            lg={12}
          >
            <Card className="shadow-lg  bg-white rounded">
              <Accordion.Toggle
                as={Button}
                eventKey={el.id}
                variant="link"
                className="shadow-lg  bg-white rounded my-1"
                style={{ textDecoration: "none" }}
              >
                <strong style={{ color: "#FF7518" }}>{el.question}</strong>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={el.id}>
                <Card.Body>{el.explanation}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQ;
