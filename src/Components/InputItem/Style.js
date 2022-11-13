import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.8rem;

  input {
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: #e6f1ff;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  label {
    font-size: 1.1rem;
  }
`;
