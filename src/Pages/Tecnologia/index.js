import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Tecnology() {
    const {dark, sidebar} = useContext(SidebarContext);
  return (
    <ContainerGeneral mode={dark} wdt={sidebar}>
      <h1>Tecnologia</h1>
    </ContainerGeneral>
  );
}

export default Tecnology;