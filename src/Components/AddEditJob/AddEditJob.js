import React, {useState, useRef} from 'react';
import {Container, Form, Select, SelectContainer} from './Style';
import InputItem from '../InputItem/InputItem';
import Button from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addJob, editJobs} from '../../Redux/Job';
import {useNavigate} from 'react-router-dom';

export default function AddEditJob({edit}) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let editData = useSelector((state) => state.Job.editJob);
  let position = useRef();
  let company = useRef();
  let location = useRef();
  let status = useRef();
  let type = useRef();

  let input = [
    {name: 'Position', type: 'text', ref: position},
    {name: 'Company', type: 'text', ref: company},
    {
      name: 'JobLocation',
      type: 'email',
      ref: location,
    },
  ];

  let [inputData, setInputData] = useState({
    Position: edit ? editData?.position : '',
    Company: edit ? editData?.company : '',
    JobLocation: edit ? editData?.jobLocation : 'My City',
    Status: edit ? editData?.status : 'interview',
    Type: edit ? editData?.jobType : 'full-time',
  });

  return (
    <Container>
      <h2>{edit ? 'Edit Job' : 'Add Job'}</h2>
      <Form>
        {input.map((item, index) => (
          <InputItem
            key={index}
            name={item.name}
            type={item.type}
            value={inputData[item.name]}
            refs={item.ref}
            action={(e) =>
              setInputData({...inputData, [item.name]: e.target.value})
            }
          />
        ))}
        <SelectContainer>
          <label htmlFor="status">Status</label>
          <Select
            id="status"
            onChange={(e) =>
              setInputData({...inputData, Status: e.target.value})
            }
            ref={status}
            defaultValue={editData?.status}
          >
            <option value="interview">interview</option>
            <option value="declined">declined</option>
            <option value="pending">pending</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <label htmlFor="type">Job Type</label>
          <Select
            id="type"
            onChange={(e) => setInputData({...inputData, Type: e.target.value})}
            ref={type}
            defaultValue={editData?.jobType}
          >
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="remote">remote</option>
            <option value="internship">internship</option>
          </Select>
        </SelectContainer>

        <div className="buttons">
          <Button
            text="Clear"
            background="#627D98"
            action={() => {
              setInputData({
                ...inputData,
                Position: '',
                Company: '',
                JobLocation: 'My City',
              });
              position.current.value = '';
              company.current.value = '';
              location.current.value = 'My City';
              status.current.value = 'interview';
              type.current.value = 'full-time';
            }}
          />
          <Button
            text="Submit"
            action={() => {
              if (edit) {
                dispatch(
                  editJobs({
                    jobId: editData._id,
                    job: {
                      position: inputData.Position,
                      company: inputData.Company,
                      jobLocation: inputData.JobLocation,
                      jobType: inputData.Type,
                      status: inputData.Status,
                    },
                  })
                );
                navigate('/dashboard/jobs');
                return;
              }
              dispatch(
                addJob({
                  position: inputData.Position,
                  company: inputData.Company,
                  jobLocation: inputData.JobLocation,
                  jobType: inputData.Type,
                  status: inputData.Status,
                })
              );
              navigate('/dashboard/jobs');
            }}
          />
        </div>
      </Form>
    </Container>
  );
}
