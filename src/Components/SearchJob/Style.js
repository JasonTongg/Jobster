import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 5px;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  button {
    height: fit-content;
  }
`;
