import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Schedule() {
  const {dark, sidebar} = useContext(SidebarContext);
  return (
    <ContainerGeneral mode={dark} wdt={sidebar}>
        <h1>Agenda</h1>
    </ContainerGeneral>
  );
}

export default Schedule;