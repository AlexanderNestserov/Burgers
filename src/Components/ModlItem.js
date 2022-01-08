import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './ModalButton'

const Overlay = styled.div`
position:fixed;
display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgba(0, 0, 0, .5);
z-index:10;
`;

const Modal = styled.div`
margin-top:120px;
background-color:#fff;
width:600px;
height:600px;
font-family:Pacifico;
`;

const Banner = styled.div`
background-size:cover;
background-image:url(${({ img }) => img});
background-position:center;
height:200px;
width:100%;
margin-bottom:20px;
`;

const Flex = styled.div`
display:flex;
justify-content:space-between;
`;

const Pad = styled.p`
padding:0 20px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

   function closeModal(e) {
      if (e.target.id === "overlay") {
         setOpenItem(null)
      }
   }
   if (!openItem) {
      return null;
   }

   return (
      <Overlay
         id="overlay"
         onClick={closeModal}
      >
         <Modal>
            <Banner img={openItem.img} />
            <Flex>
               <Pad>{openItem.name}</Pad>
               <Pad>{openItem.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</Pad>
            </Flex>
            <ModalButton />
         </Modal>
      </Overlay>
   )
};