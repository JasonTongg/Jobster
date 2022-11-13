import React from 'react';
import {Buttons} from './Style';

export default function Button({
  text,
  action,
  size = 20,
  background = 'var(--primaryColor)',
  color = 'white',
  width = '',
}) {
  return (
    <Buttons
      onClick={action}
      style={{
        fontSize: `${size}px`,
        backgroundColor: background,
        color: color,
        width: width,
      }}
    >
      {text}
    </Buttons>
  );
}
