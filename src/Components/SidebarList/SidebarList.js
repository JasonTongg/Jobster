import React from 'react';
import {Container} from './Style';
import {useNavigate} from 'react-router-dom';

export default function SidebarList({text, icon, active, action, index, path}) {
  let navigate = useNavigate();
  let componentClick = () => {
    action();
    navigate(path);
  };
  return (
    <Container
      className={active === index && 'active'}
      onClick={componentClick}
    >
      {icon}
      <p>{text}</p>
    </Container>
  );
}
