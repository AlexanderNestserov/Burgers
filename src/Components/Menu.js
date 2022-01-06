import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../images/banner.png';

const MenuStyled = styled.main`
background-color:#ccc;
margin-top:80px;
`;

const H2 = styled.h2`
font-size:40px;
text-align:center;
`;

const SectionMenu = styled.section`
padding:10px;
`;

const DivBanner = styled.div`
width:100%;
height:150px;
margin:0 140px;
`;

const ImgBanner = styled.img`
width:80%;
height:150px;
`;

export const Menu = () => (

   <MenuStyled>
      <DivBanner>
         <ImgBanner src={bannerImg} alt='banner'></ImgBanner>
      </DivBanner>
      <SectionMenu>
         <H2>Burgers</H2>
         <ListItem itemList={dbMenu.burger} />
      </SectionMenu>
      <SectionMenu>
         <H2>Eats/Drinks</H2>
         <ListItem itemList={dbMenu.other} />
      </SectionMenu>
   </MenuStyled>
);




