import React, { useContext } from 'react';
import { Stream } from '../../Components/Charts';
import { SidebarContext } from '../../Context/SidebarContext';

import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Dashboard() {

    const {dark, sidebar} = useContext(SidebarContext);

  return (
      <ContainerGeneral mode={dark} wdt={sidebar}>
        <h1>Dashboard</h1>
        <C.ContainerChart mode={dark}>
          <Stream/>
        </C.ContainerChart>
      </ContainerGeneral>
  );
}

export default Dashboard;