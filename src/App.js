import Layout from "./components/Layout/Primero/Layout";
import Layout2 from "./components/Layout/Segundo/Layout2";
import LayoutGaming from "./components/Layout/Tercero/LayoutGaming";
import LayoutDesign from "./components/Layout/Tercero/LayoutDesign";
import LayoutOffice from "./components/Layout/Tercero/LayoutOffice";
import LayoutOther from "./components/Layout/Tercero/LayoutOther";
import LayoutCoding from "./components/Layout/Tercero/LayoutCoding";
import LayoutRendering from "./components/Layout/Tercero/LayoutRendering";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/Pages/PagesError/NotFound";
import pruebaPage from "./components/Pages/pruebas";


function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="opciones" element={<Layout2 />}/>
          <Route path="opciones/gaming" element={<LayoutGaming/>}/>
          <Route path="opciones/design" element={<LayoutDesign/>}/>
          <Route path="opciones/coding" element={<LayoutCoding/>}/>
          <Route path="opciones/rendering" element={<LayoutRendering/>}/>
          <Route path="opciones/office" element={<LayoutOffice/>}/>
          <Route path="opciones/other" element={<LayoutOther/>}/>
          <Route path="prueba" element={<pruebaPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      </>
    );
  
}

export default App;
