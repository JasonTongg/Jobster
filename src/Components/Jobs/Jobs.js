import React from 'react';
import {Container} from './Style';
import SearchJob from '../SearchJob/SearchJob';
import JobList from '../JobList/JobList';
import Pagination from '../PaginationBar/Pagination';

export default function Jobs() {
  return (
    <Container>
      <SearchJob />
      <JobList />
      <Pagination />
    </Container>
  );
}
