import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #36454f;
`;

// export const NavigationContainer = styled('div')({
//   height: '70px',
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'space - between',
//   marginBottom: '25px',
//   backgroundColor: '#36454f',
// })

export const NavLinks = styled.div`
  ${'' /* width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; */}
  all: unset;
`;

export const NavLink = styled(Link)`
  ${'' /* padding: 10px 15px;
  cursor: pointer;
  color: white;
  text-decoration: none; */}
  all: unset;
`;
