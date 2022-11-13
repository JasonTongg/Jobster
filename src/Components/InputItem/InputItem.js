import React from 'react';
import {Container} from './Style';

export default function InputItem({name, type, placeholder, action, max}) {
  return (
    <Container style={max && {width: '100%'}}>
      <label for={name}>{name}</label>
      <input
        type={type}
        id={name}
        onChange={action}
        placeholder={placeholder}
      />
    </Container>
  );
}
