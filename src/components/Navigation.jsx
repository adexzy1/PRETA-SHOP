import styled from 'styled-components';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import Axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  margin-bottom: 0.5rem;
`;
const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const NavList = styled.ul`
  flex: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItems = styled.li`
  list-style: none;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease all;

  &:hover::after {
    content: '';
    position: absolute;
    height: 0.1rem;
    width: 100%;
    background-color: #000;
    bottom: -0.5rem;
    left: 0;
  }
`;
const Searchicon = styled.div`
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    color: #ffd60a;
  }
`;
const Input = styled.input`
  position: absolute;
  bottom: -2.5rem;
  left: 0;
  width: 100%;
  height: 2rem;
  border-radius: 0.3rem;
  border: 1px solid #c7c7cd;
  outline: none;
`;
const Logo = styled.h2`
  margin-right: 5rem;
`;
const CartContainer = styled.div`
  flex: 1;
  text-align: right;
`;
const Cart = styled.div`
  display: inline-block;
  padding: 0.52rem;
  cursor: pointer;
  background-color: #ffd60a;
  border-radius: 0.7rem;
`;

const Navigation = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const handleClick = () => {
    setSearchBox(!searchBox);
    console.log(searchBox);
  };
  useEffect(() => {
    Axios.get('http://localhost:4000/menuitems').then((Response) => {
      setMenuItems(Response.data);
    });
  }, []);

  return (
    <NavContainer>
      <Logo>PRETA.</Logo>
      <Nav>
        <NavList>
          {menuItems.map((items) => {
            return <NavItems key={items._id}>{items.name}</NavItems>;
          })}
        </NavList>
        <Searchicon>
          {searchBox === true && <Input type="text" />}
          <SearchIcon onClick={handleClick} />
        </Searchicon>
      </Nav>
      <CartContainer>
        <Cart>
          <ThemeProvider theme={theme}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </ThemeProvider>
        </Cart>
      </CartContainer>
    </NavContainer>
  );
};

export default Navigation;
