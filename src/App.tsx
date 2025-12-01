
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import ListaExercicios from "./components/exercicio/listaexercicio/ListaExercicios";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import DeletarExercicio from "./components/exercicio/deletarexercicio/DeletarExercicio";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil";
import About from "./pages/sobrenos/SobreNos";
import Perfil from "./pages/perfil/perfil";
import UsuarioLogin from "./pages/login/UsuarioLogin";

function App() {

  return (
    <>
        
        <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <div className="min-h-[80vh] bg-linear-to-b from-purple-600 via-purple-500 to-pink-600 ">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/exercicios" element={<ListaExercicios />} />
              <Route path="/cadastrarexercicio" element={<FormExercicio />} />
              <Route path="/editarexercicio/:id" element={<FormExercicio />} />
              <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/perfil" element={<Perfil/>} />
              <Route path="/usuarioLogin" element={<UsuarioLogin/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}
export default App