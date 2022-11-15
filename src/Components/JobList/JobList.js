import React from 'react';
import {
  Container,
  Item,
  Header,
  Info,
  Buttons,
  InfoItem,
  JobStatus,
  BigContainer,
} from './Style';
import {useSelector, useDispatch} from 'react-redux';
import {HiLocationMarker} from 'react-icons/hi';
import {GiFireworkRocket} from 'react-icons/gi';
import {BiCalendar} from 'react-icons/bi';
import moment from 'moment';
import {deleteJobs, editJob} from '../../Redux/Job';
import {useNavigate} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export default function JobList() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {allJobs, isLoading} = useSelector((state) => state.AllJobs);
  let removeLoading = useSelector((state) => state.Job.isLoading);

  if (isLoading || removeLoading) {
    return (
      <div style={{width: '100%', textAlign: 'center', marginBlock: '4rem'}}>
        <BeatLoader
          color="var(--primaryColor)"
          loading={isLoading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <BigContainer>
      <h3 style={{marginBottom: '1rem'}}>
        {allJobs.length} Job{allJobs.length > 1 && 's'} Found
      </h3>
      <Container>
        {allJobs.map((item, index) => (
          <Item key={index}>
            <Header>
              <div>
                <p>{item.company.charAt(0)}</p>
              </div>
              <div>
                <p>{item.position}</p>
                <p>{item.company}</p>
              </div>
            </Header>
            <Info>
              <InfoItem>
                <HiLocationMarker />
                <p>{item.jobLocation}</p>
              </InfoItem>
              <InfoItem>
                <BiCalendar />
                <p>{moment(item.createdAt).format('MMM Do, YYYY')}</p>
              </InfoItem>
              <InfoItem>
                <GiFireworkRocket />
                <p>{item.jobType}</p>
              </InfoItem>
              <JobStatus
                style={
                  item.status === 'pending'
                    ? {backgroundColor: '#FCEFC7', color: '#EAB949'}
                    : item.status === 'declined'
                    ? {backgroundColor: '#FFEEEE', color: '#D66A6A'}
                    : {backgroundColor: '#E0E8F9', color: '#6488D7'}
                }
              >
                <p>{item.status}</p>
              </JobStatus>
            </Info>
            <Buttons>
              <button
                onClick={() => {
                  navigate('/dashboard/edit');
                  dispatch(editJob(item));
                }}
              >
                <p>Edit</p>
              </button>
              <button
                onClick={() => {
                  dispatch(deleteJobs(item._id));
                }}
              >
                <p>Delete</p>
              </button>
            </Buttons>
          </Item>
        ))}
      </Container>
    </BigContainer>
  );
}
