import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.3rem;
  padding: 2rem;
  background-color: white;
  width: 400px;
  transition: box-shadow 0.5s ease-out;
  border-top: 5px solid var(--primaryColor);
  border-radius: 5px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  span {
    color: var(--primaryColor);
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }
`;
