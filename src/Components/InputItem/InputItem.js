import React from 'react';
import {Container} from './Style';

export default function InputItem({
  name,
  type,
  placeholder = '',
  action,
  max,
  value = '',
  refs = '',
}) {
  return (
    <Container style={max && {width: '100%'}}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        defaultValue={value}
        onChange={action}
        placeholder={placeholder}
        ref={refs}
      />
    </Container>
  );
}
