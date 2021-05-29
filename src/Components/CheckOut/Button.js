import React from 'react';

const ButtonOrder = ({ event, name, surname, email, age }) => {
  return (
    <>
      <button
        disabled={!(name !== '' && surname !== '' && email !== '' && age !== null)}
        onClick={event}
        className="button-orden"
      >
        CREAR ORDEN
      </button>
    </>
  );
};

export default ButtonOrder;