import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "./components/Layout/Primero/Layout";
import Layout2 from "./components/Layout/Segundo/Layout2";
import LayoutGaming from "./components/Layout/Tercero/LayoutGaming";
import LayoutDesign from "./components/Layout/Tercero/LayoutDesign";
import LayoutOffice from "./components/Layout/Tercero/LayoutOffice";
import LayoutOther from "./components/Layout/Tercero/LayoutOther";
import LayoutCoding from "./components/Layout/Tercero/LayoutCoding";
import LayoutRendering from "./components/Layout/Tercero/LayoutRendering";
import NotFound from "./components/Pages/PagesError/NotFound";
import Login  from "./components/Pages/Login";
import Header from "./components/Home/Header";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <BrowserRouter>
              <Header/>
                <Routes>
                  <Route path="/" element={<Layout />}/>
                  <Route path="opciones" element={<Layout2 />}/>
                  <Route path="opciones/gaming" element={<LayoutGaming/>}/>
                  <Route path="opciones/design" element={<LayoutDesign/>}/>
                  <Route path="opciones/coding" element={<LayoutCoding/>}/>
                  <Route path="opciones/rendering" element={<LayoutRendering/>}/>
                  <Route path="opciones/office" element={<LayoutOffice/>}/>
                  <Route path="opciones/other" element={<LayoutOther/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>     
            </BrowserRouter>
          </>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;
