import React, {useState, useEffect, useRef} from 'react';
import {Container, Form} from './Style';
import '../../Global.css';
import Logo from '../../Assets/logo.svg';
import Button from '../../Components/Button/Button';
import InputItem from '../../Components/InputItem/InputItem';
import {userLogin, userRegister} from '../../Redux/User';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

let initialFormData = {
  name: '',
  email: '',
  password: '',
};

export default function LoginRegis() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {isLoading, user} = useSelector((state) => state.User);
  let [login, setLogin] = useState(false);
  let [formData, setFormData] = useState(initialFormData);
  let name = useRef();
  let email = useRef();
  let password = useRef();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 0);
    }
    // eslint-disable-next-line
  }, [user]);

  let handleSubmit = () => {
    if (!formData.email || !formData.password || (login && !formData.name)) {
      toast.error('Please fill the form...');
      return;
    }
    if (!login) {
      dispatch(userLogin({email: formData.email, password: formData.password}));
      return;
    }
    dispatch(
      userRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <Container className="Container">
      <Form>
        <img src={Logo} alt="logo" />
        {login ? <h2>Register</h2> : <h2>Login</h2>}
        {login && (
          <InputItem
            name="Name"
            type="text"
            action={(e) => setFormData({...formData, name: e.target.value})}
            max
            refs={name}
          />
        )}
        <InputItem
          name="Email"
          type="text"
          action={(e) => setFormData({...formData, email: e.target.value})}
          max
          refs={email}
        />
        <InputItem
          name="Password"
          type="password"
          action={(e) => setFormData({...formData, password: e.target.value})}
          max
          refs={password}
        />
        <Button
          text={isLoading ? 'Loading...' : 'Submit'}
          width="100%"
          size="18"
          action={() => handleSubmit()}
        />
        <Button
          text={isLoading ? 'Loading...' : 'Demo App'}
          background="var(--primaryPastel)"
          color="var(--primaryColor)"
          width="100%"
          size="18"
          action={() =>
            dispatch(
              userLogin({email: 'testUser@test.com', password: 'secret'})
            )
          }
        />
        {login ? (
          <p>
            Already a member?{' '}
            <span onClick={() => setLogin(!login)}>Login</span>
          </p>
        ) : (
          <p>
            Not a member yet?{' '}
            <span onClick={() => setLogin(!login)}>Register</span>
          </p>
        )}
      </Form>
    </Container>
  );
}
