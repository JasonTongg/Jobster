import React, {useState, useEffect} from 'react';
import {Container} from './Style';
import {BiChevronsLeft, BiChevronsRight} from 'react-icons/bi';
import {useSelector, useDispatch} from 'react-redux';
import {getJobs} from '../../Redux/AllJobs';

export default function Pagination() {
  let dispatch = useDispatch();
  let pages = useSelector((state) => state.AllJobs.pages);
  let filter = useSelector((state) => state.AllJobs.filter);
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getJobs({...filter, page}));
  }, [page, dispatch, filter]);

  return (
    <Container>
      <div
        className="left"
        onClick={() =>
          setPage(() => {
            let temp = page - 1;
            if (temp < 1) {
              temp = pages;
            }
            return temp;
          })
        }
      >
        <BiChevronsLeft></BiChevronsLeft>
      </div>
      {Array.from({length: pages}, (_, index) => {
        return index + 1;
      }).map((item, index) => (
        <div
          key={index}
          className={page === item ? 'active' : ''}
          onClick={() => setPage(item)}
        >
          {item}
        </div>
      ))}
      <div
        className="right"
        onClick={() =>
          setPage(() => {
            let temp = page + 1;
            if (temp > pages) {
              temp = 1;
            }
            return temp;
          })
        }
      >
        <BiChevronsRight></BiChevronsRight>
      </div>
    </Container>
  );
}
