import React from 'react';
import './CheckOut.css'
import {Spinner} from 'react-bootstrap';

const ButtonOrder = ({ event, name, surname, email, tel }) => {
  return (
    <>
      <button
        disabled={!(name !== '' && surname !== '' && email !== '' && tel !== null)}
        onClick={event}
        className="button-orden"
      >
       CREAR ORDEN
      </button>
      <button className="loading-button" variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
        </button>
    </>
  );
};

export default ButtonOrder;