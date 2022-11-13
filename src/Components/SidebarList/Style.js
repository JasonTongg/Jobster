import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1rem;
  color: #8a939e;
  cursor: pointer;
  padding-left: 2.5rem;

  svg {
    font-size: 1.5rem;
    transition: all 0.3s ease-out;
  }

  p {
    transition: all 0.3s ease-out;
  }

  &.active,
  &:hover,
  &:hover {
    color: black;
    svg {
      color: var(--primaryColor);
    }
  }

  &:hover svg,
  &:hover p {
    transform: translateX(10px);
  }

  &:hover {
    background: #e6f1ff;
  }
`;
