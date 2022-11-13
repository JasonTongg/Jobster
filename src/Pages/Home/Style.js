import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

export const Nav = styled.nav`
  width: 100%;
  padding-block: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 84.4px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  h1 {
    margin: 0;
    font-size: 3rem;

    span {
      color: var(--primaryColor);
    }
  }

  p {
    line-height: 1.8rem;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 85%;
  }
`;
