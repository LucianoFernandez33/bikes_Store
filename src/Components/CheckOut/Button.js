import React from 'react';

const Button = ({ event, name, surname, age }) => {
  return (
    <>
      <button
        disabled={!(name !== '' && surname !== '' && age !== null)}
        onClick={event}
        className="button-orden"
      >
        CREAR ORDEN
      </button>
    </>
  );
};

export default Button;