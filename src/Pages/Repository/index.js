import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import { ContainerGeneral } from '../../styles/Pages/ContainerGeneral';
import * as C from './styles';

function Repository() {
  const {dark, sidebar} = useContext(SidebarContext);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://api.github.com/users/setxpro/repos');
      setRepo(data);
    })()
  },[])
  return (
    <ContainerGeneral mode={dark} wdt={sidebar}>
      <h1>Repositórios</h1>
      <C.ContentRepository>

      {repo.map((item, index) => (
        <div>
          {item.description === null ? '' : 
            <C.AreaItemRepo key={index}  mode={dark}>
              <C.RepoItem><a href={item.html_url}><p>{item.name}</p></a></C.RepoItem>
              <img src="https://www.hypeness.com.br/1/2018/03/rick-and-morty-4-1.png" alt="nameimg" />
              <C.Description mode={dark}>{item.description}</C.Description>
              <a href={item.html_url} target="_blank">Seguir o link</a>
            </C.AreaItemRepo>
          }
        
        </div>
      ))}

      </C.ContentRepository>
    </ContainerGeneral>
  );
}

export default Repository;