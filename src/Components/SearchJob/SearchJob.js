import React, {useState, useEffect, useRef} from 'react';
import {Container, Form} from './Style';
import InputItem from '../InputItem/InputItem';
import {SelectContainer, Select} from '../AddEditJob/Style';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {getJobs} from '../../Redux/AllJobs';

export default function SearchJob() {
  let dispatch = useDispatch();
  let [inputData, setInputData] = useState({
    search: '',
    type: 'all',
    sort: 'latest',
    status: 'all',
  });
  let search = useRef();
  let sort = useRef();
  let type = useRef();
  let status = useRef();

  useEffect(() => {
    dispatch(
      getJobs({
        search: inputData.search,
        status: inputData.status,
        type: inputData.type,
        sort: inputData.sort,
        page: 1,
      })
    );
  }, [inputData, dispatch]);

  return (
    <Container>
      <h2>Search Form</h2>
      <Form>
        <InputItem
          name="Search"
          type="text"
          action={(e) => setInputData({...inputData, search: e.target.value})}
          refs={search}
        />
        <SelectContainer>
          <label htmlFor="status">Status</label>
          <Select
            id="status"
            onChange={(e) =>
              setInputData({
                ...inputData,
                status: e.target.value,
              })
            }
            ref={status}
          >
            <option value="all">all</option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
            <option value="pending">pending</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <label htmlFor="type">Type</label>
          <Select
            id="type"
            onChange={(e) =>
              setInputData({
                ...inputData,
                type: e.target.value,
              })
            }
            ref={type}
          >
            <option value="all">all</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="remote">remote</option>
            <option value="internship">internship</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <label htmlFor="sort">Sort</label>
          <Select
            id="sort"
            onChange={(e) =>
              setInputData({
                ...inputData,
                sort: e.target.value,
              })
            }
            ref={sort}
          >
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </Select>
        </SelectContainer>
        <Button
          text="Clear Filters"
          background="#F8D7DA"
          color="#942029"
          size="18"
          action={() => {
            setInputData({
              search: '',
              type: 'all',
              sort: 'latest',
              status: 'all',
            });

            type.current.value = 'all';
            sort.current.value = 'latest';
            search.current.value = '';
            status.current.value = 'all';
          }}
        />
      </Form>
    </Container>
  );
}
