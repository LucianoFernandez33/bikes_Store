import React from 'react';

const Input = ({ type, event, name, text }) => {
  return (
    <>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <label style={{ marginRight: '10px', width:'55px' }}>{text}</label>
        <input type={type} onChange={e => event(e)} name={name} />
      </div>
    </>
  );
};

export default Input;