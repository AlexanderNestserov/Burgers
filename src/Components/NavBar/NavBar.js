import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import signImg from '../images/sign.svg';

const NavBarStyled = styled.header`
position:fixed;
top:0;
left:0;
z-index:999;
height:80px;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
background-color:#299B01;
color:#fff;
`;

const Logo = styled.div`
display:flex;
align-items:center;
`;

const ImgLogo = styled.img`
width:50px;
`;

const H1 = styled.h1`
font-size:24px;
padding:10px;
margin-left:10px;
`;

const ImgSign = styled.img`
width:40px;
`;

const Button = styled.button`
background-color:#299B01;
font-size:14px;
font-weight:700;
color:#fff;
margin-right:10px;
:hover{
   background-color:#000;
   border-radius:10px;
}
:active{
   background-color:#299A;
   border-radius:10px;
}
`;

const LogOut = styled.span`
font-size:36px;
cursor:pointer;
font-weight:700;
`;

const User = styled.div`
display:flex;
align-items:center;
text-align:center;
`;

export const NavBar = ({ authentication, login, logOut }) => (
   <NavBarStyled>
      <Logo>
         <ImgLogo src={logoImg} alt='logo'></ImgLogo>
         <H1>Mr. Burger</H1>
      </Logo>
      {authentication ?
         <User>
            <figure>
               <ImgSign src={signImg} alt={authentication.displayName}></ImgSign>
               <figcaption>
                  {authentication.displayName}
               </figcaption>
            </figure>
            <br />
            <LogOut title='Выйти' onClick={logOut}>X</LogOut >
         </User> :
         <Button onClick={login}>
            <ImgSign src={signImg} alt='signin'></ImgSign><br />
            ВОЙТИ
         </Button>
      }
   </NavBarStyled>
);

