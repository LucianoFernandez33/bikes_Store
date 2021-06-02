import React from 'react';

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
    </>
  );
};

export default ButtonOrder;