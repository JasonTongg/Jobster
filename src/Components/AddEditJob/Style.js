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

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  button {
    height: fit-content;
  }

  .buttons {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media only screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    & > * {
      width: 100%;
    }
  }
`;

export const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #e6f1ff;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.8rem;
  label {
    font-size: 1.1rem;
  }
`;
