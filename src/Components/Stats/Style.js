import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Stat = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 3.2rem;
    font-weight: 500;

    div {
      width: 70px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      svg {
        font-size: 2.2rem;
      }
    }
  }

  p:last-of-type {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;

  h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  button {
    border: none;
    background: transparent;
    font-size: 1.2rem;
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
