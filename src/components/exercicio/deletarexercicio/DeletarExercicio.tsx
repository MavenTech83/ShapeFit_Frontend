import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import type Exercicio from "../../../models/Exercicio";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarExercicio() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [exercicio, setExercicio] = useState<Exercicio | null>(null);

   // Buscar exercício pelo ID
  async function buscarExercicio(id: string) {
    try {
      await buscar(`/exercicios/${id}`, (data: Exercicio) => setExercicio(data));
    } catch (error) {
      console.log("Erro ao buscar exercício:", error);
    }
  }

  useEffect(() => {
    if (id) buscarExercicio(id);
  }, [id]);

  // Confirmar exclusão
  async function confirmarDelete() {
    try {
      await deletar(`/exercicios/${id}`);
      ToastAlerta("Exercício deletado com sucesso!", 'erro');
      navigate("/exercicios");
    } catch (error) {
      console.log("Erro ao deletar exercício:", error);
      ToastAlerta("Erro ao deletar o exercício!", 'erro');
    }
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Exercício</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o exercício abaixo?
      </p>

      {exercicio && (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
            {exercicio.nome}
          </header>

          <div className="p-6 flex flex-col gap-4 bg-slate-200">
            <p className="text-xl font-semibold">Descrição:</p>
            <p className="text-lg">{exercicio.descricao}</p>

            <p className="text-sm text-slate-600">
              Categoria:{" "}
              {exercicio.categoria
                ? exercicio.categoria.nome || "Categoria sem nome"
                : "Sem categoria"}
            </p>
          </div>

          <div className="flex">
            {/* CANCELAR */}
            <Link
              to="/exercicios"
              className="text-slate-100 bg-red-600 hover:bg-red-400 w-full py-2 text-center"
            >
              Não
            </Link>

            {/* CONFIRMAR */}
            <button
              onClick={confirmarDelete}
              className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 py-2"
            >
              Sim
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletarExercicio;
