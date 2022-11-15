import React, {useState, useRef} from 'react';
import {Container, Form} from './Style';
import InputItem from '../InputItem/InputItem';
import Button from '../Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../../Redux/User';

export default function Profile() {
  let user = useSelector((state) => state.User.user);
  let dispatch = useDispatch();
  let name = useRef();
  let last = useRef();
  let email = useRef();
  let location = useRef();

  let input = [
    {name: 'Name', type: 'text', value: user.name, ref: name},
    {
      name: 'LastName',
      type: 'text',
      value: user.lastName || 'Last name',
      ref: last,
    },
    {name: 'Email', type: 'email', value: user.email, ref: email},
    {
      name: 'Location',
      type: 'text',
      value: user.location || 'Your city',
      ref: location,
    },
  ];

  let [inputData, setInputData] = useState({
    Name: user.name,
    LastName: user.lastName || 'Last name',
    Email: user.email,
    Location: user.location || 'Your city',
  });

  return (
    <Container>
      <h2>Profile</h2>
      <Form>
        {input.map((item, index) => (
          <InputItem
            name={item.name}
            type={item.type}
            value={item.value}
            refs={item.ref}
            key={index}
            action={(e) =>
              setInputData({...inputData, [item.name]: e.target.value})
            }
          />
        ))}
        <Button
          text="Save Changes"
          action={() =>
            dispatch(
              updateUser({
                email: inputData.Email,
                name: inputData.Name,
                lastName: inputData.LastName,
                location: inputData.Location,
              })
            )
          }
        />
      </Form>
    </Container>
  );
}
