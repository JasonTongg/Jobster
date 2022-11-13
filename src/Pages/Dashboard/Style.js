import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;

  &.full {
    grid-template-columns: 1fr;
  }
`;

export const SideBar = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 96px 1fr;
  align-items: center;
  background-color: white;
  transition: all 0.2s ease-out;
  transform: translateX(0%);
  position: static;
  z-index: 0;

  img {
    padding-left: 2.5rem;
  }

  &.hide {
    transform: translateX(-100%);
    position: absolute;
    z-index: -1000;
  }
`;

export const List = styled.div`
  align-self: flex-start;
  padding-block: 3rem;
  display: grid;
  grid-template-rows: repeat(4, 56px);
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 96px 1fr;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 4rem;

  .toggle {
    font-size: 2rem;
    color: var(--primaryColor);
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: var(--primaryColor);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 3px;
    position: relative;
    cursor: pointer;

    p {
      transform: translateY(-2px);
    }

    div {
      position: absolute;
      left: 0;
      top: 130%;
      width: 100%;
      padding-block: 0.6rem;
      color: var(--primaryColor);
      background-color: #dbeafe;
      cursor: pointer;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 3rem 4rem;
`;
