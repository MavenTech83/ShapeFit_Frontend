import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ListaExercicios from "./components/exercicio/listaexercicio/ListaExercicios";
import Home from "./pages/home/Home";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import DeletarExercicio from "./components/exercicio/deletarexercicio/DeletarExercicio";

function App() {

  return (

    <>
      <BrowserRouter>
        <Navbar />

        <div className="min-h-[80vh] ">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/exercicios" element={<ListaExercicios />} />
            <Route path="/cadastrarexercicio" element={<FormExercicio />} />
            <Route path="/editarexercicio/:id" element={<FormExercicio />} />
            <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />



          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App