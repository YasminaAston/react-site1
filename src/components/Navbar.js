import React from 'react';
import styled from 'styled-components';
import {Link} from'react-router-dom';



const NavbarContainer =styled.div`
width:100%;
height: 80px;
z-index:20;
background: #fff;
`;
const NavbarWrap =styled.div`
width: 120px;
height: 100%;
margin: 0 auto;
z-index: 20;
display: flex;
position: relative;
align-items: center;
justify-content: space-between;
`;

const Nav  =styled.nav`
flex: 1;
position:relative;
padding-left: 50px`;
const NavLink =styled(Link)`
color:#000;
padding: 0 15px;
font-size: 16px;
line-height: 80px;
font-weight: 700;
text-decoration:none;
`;
const Search =styled.div``;
const SearchWrap =styled.div``;
const input =styled.input``;
const ButtonContainer =styled.div``;
const button =styled.button``;

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrap>
            
            <Nav>
              <NavLink  to='/'>HOME </NavLink>
              <NavLink  to='/'>MARKET </NavLink>
              <NavLink  to='/'>TRADE</NavLink>
              <NavLink  to='/'>PRICING </NavLink>
              <NavLink  to='/'>DOWNLOAD </NavLink>
              <NavLink  to='/'>HELP</NavLink>
            </Nav>
            <Search>
            <SearchWrap> 
            <input type="text" placeholder='Symbol/Name' />  
            </SearchWrap> 
            </Search>
            <ButtonContainer>
            <button> Sing Up</button>
            <button> Log IN</button>
            </ButtonContainer>
        </NavbarWrap>
    </NavbarContainer>
    );
};

export default Navbar;
