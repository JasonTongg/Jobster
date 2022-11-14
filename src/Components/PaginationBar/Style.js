import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 40px);
  justify-content: center;
  padding-block: 2rem;
  gap: 0.5rem;

  & > * {
    width: 40px;
    height: 40px;
    background-color: var(--primaryPastel);
    color: var(--primaryColor);
    font-size: 1.5rem;
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;

    &.active {
      background-color: var(--primaryColor);
      color: var(--primaryPastel);
    }
  }

  & > *:first-of-type,
  & > *:last-of-type {
    background-color: white;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
    opacity: 0.5;
  }
`;
