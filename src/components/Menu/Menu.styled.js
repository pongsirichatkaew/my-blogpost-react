import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryLight};
  height: ${({ open }) => (open ? `100vh` : `0vh`)};
  text-align: right;
  position: sticky;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;