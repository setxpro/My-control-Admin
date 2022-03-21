import { createContext, useState } from "react";


export const SidebarContext = createContext();

export default function SideBarProvider({children}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [dark, setDark] = useState(false);
    const [light, setLight] = useState(true);

    const [spinner, setSpinner] = useState(false);
    
    
    
    return(
        <SidebarContext.Provider value={{ 
            sidebar, 
            setSidebar, 
            showSidebar, 
            dark, 
            setDark, 
            light, 
            setLight,
            spinner,
            setSpinner
            
        }}>
            {children}
        </SidebarContext.Provider>
    );
} 