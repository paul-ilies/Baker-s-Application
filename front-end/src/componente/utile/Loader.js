import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{
                width: "150px",
                height: "150px",
                margin: "auto",
                zIndex: '999',
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
            }}
            variant="warning"
        >
        </Spinner>
    )
}

export default Loader
