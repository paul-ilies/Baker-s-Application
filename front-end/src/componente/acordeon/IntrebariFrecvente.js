import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Accordion, Card, Button } from 'react-bootstrap'
import { FaQuestion } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const IntrebariFrecvente = () => {

    const [faq, setFaq] = useState([])


    useEffect(() => {
        axios.get("/faqList.json").then(response => {
            const { data } = response
            setFaq(data)
        })
    }, [])

    return (
        <div className="my-5">
            <h1 className="my-5 text-center">
                <strong>Frequently Asked Questions </strong>
                <IconContext.Provider value={{ color: "#FF7518" }}  >
                    <FaQuestion />
                </IconContext.Provider>
            </h1>
            {faq.map(el => {
                return (
                    <Accordion defaultActiveKey="0" key={el.id} className="rounded" lg={12}>
                        <Card className="shadow-lg  bg-white rounded"  >
                            <Accordion.Toggle
                                as={Button}
                                eventKey={el.id}
                                variant="link"
                                className="shadow-lg  bg-white rounded my-1"
                                style={{ textDecoration: "none" }}>
                                <strong style={{ color: "#FF7518" }}>{el.question}</strong>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={el.id}>
                                <Card.Body>{el.explanation}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default IntrebariFrecvente
