import styled from 'styled-components';

export const BigContainer = styled.div`
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;

  div:last-of-type {
    text-transform: capitalize;
    p:first-of-type {
      font-size: 1.3rem;
    }
    p:last-of-type {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 7px;
    }
  }

  div:first-of-type {
    background-color: var(--primaryColor);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    p {
      transform: translateY(-2px);
      font-weight: bolder;
      font-size: 1.7rem;
      color: white;
      text-transform: uppercase;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: center;
  justify-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  padding-bottom: 0rem;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  text-transform: capitalize;

  svg {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.3rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;

  button {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 500;

    p {
      transform: translateY(-2px);
    }
  }

  button:first-of-type {
    background-color: #d1e7dd;
    color: #0f5132;
  }
  button:last-of-type {
    background-color: #f8d7da;
    color: #84205c;
  }
`;

export const JobStatus = styled.div`
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  p {
    transform: translateY(-2px);
  }
`;
