import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { MdNightlight } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { SidebarContext } from '../../Context/SidebarContext';
import * as C from './styles';

function Topo() {
    
    const { showSidebar, setDark, setLight, dark } = useContext(SidebarContext);


    const darkTheme = () => {
        setLight(false);
        setDark(true);
    }
    const lightTheme = () => {
        setDark(false);
        setLight(true);
    }
    return (
        
            <C.Container>
                    <FaBars onClick={showSidebar} className="btn"/>
                    <h5>Patrick's Dev</h5>
                    <GrReactjs className='log'/>
                    {dark  ? <MdOutlineNightlight className='theme' onClick={lightTheme}/> 
                            : <MdNightlight className='theme' onClick={darkTheme}/> }
            </C.Container>
        
    )
}

export default Topo;