import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { SideBar } from "./Components/SideBar";
import Topo from "./Components/Topo";
import RotasSideBar from "./router";
import * as C from './styles/AppStyles';


export default function App() {
  return (
    <Router>
      <C.Container>
          <Topo/>
          <C.Content>
              <SideBar/>
              <RotasSideBar/>
          </C.Content>
          <Footer/>
      </C.Container>
    </Router>
  );
}