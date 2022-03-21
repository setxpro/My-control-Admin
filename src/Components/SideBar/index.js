import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../Context/SidebarContext';
import * as C from './styles';

export const SideBar = () => {
    const {sidebar, dark} = useContext(SidebarContext);
    const [data, setData] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://api.github.com/users/setxpro');
            setData(data);
        })();

    }, [])

    return( 
        <C.Container mode={sidebar} >
                <C.Content theme={dark}>
                    <img src={data.avatar_url} alt="avatar"/>
                    <div>
                        <h3>{data.name}</h3>
                        <p>{data.bio}</p>
                    </div>
                    <C.NavSideBar theme={dark}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/repository">Repositórios</Link>
                                </li>
                                <li>
                                    <Link to="/product">Em Produção</Link>
                                </li>
                                <li>
                                    <Link to="/schedule">Agenda</Link>
                                </li>
                                <li>
                                    <Link to="/tecnology">Tecnologia</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </C.NavSideBar>
                </C.Content>
        </C.Container>
    );
}