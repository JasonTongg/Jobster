import React from 'react';
import {Container, Nav, Info, Image, Content} from './Style';
import Logo from '../../Assets/logo.svg';
import Button from '../../Components/Button/Button';
import Illus from '../../Assets/homeIllus.svg';
import '../../Global.css';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  let navigate = useNavigate();

  return (
    <Container className="Container">
      <Nav>
        <img src={Logo} alt="Logo" />
      </Nav>
      <Content>
        <Info>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Button text="Login/Register" action={() => navigate('/login')} />
        </Info>
        <Image>
          <img src={Illus} alt="Illustration" />
        </Image>
      </Content>
    </Container>
  );
}
