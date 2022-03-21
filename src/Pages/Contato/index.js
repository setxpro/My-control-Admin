import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';

import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Contact() {
  const {dark, sidebar} = useContext(SidebarContext);
  return (
    <ContainerGeneral mode={dark} wdt={sidebar}>
      <h1>Contato</h1>
    </ContainerGeneral>
  );
}

export default Contact;