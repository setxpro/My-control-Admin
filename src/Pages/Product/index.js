import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Product() {
  const {dark, sidebar} = useContext(SidebarContext);
  return (
    <ContainerGeneral mode={dark} wdt={sidebar}>
      <h1>Em Produção</h1>
    </ContainerGeneral>
  );
}

export default Product;