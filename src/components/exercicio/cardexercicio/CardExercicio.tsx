import { Link } from 'react-router-dom'
import type Exercicio from '../../../models/Exercicio'
import { PencilSimpleLine, Trash } from '@phosphor-icons/react'

interface CardExercicioProps {
  exercicio: Exercicio
}

function CardExercicios({ exercicio }: CardExercicioProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between">
      
      <header className="py-2 px-6 bg-amber-400 text font-bold text-2xl">
       {exercicio.nome}
      </header>

      <p className="p-8 text-xl bg-[#F9F5ec] text h-full">{exercicio.descricao}</p>

      <div className="flex">
        {/* Botão Editar */}
        <Link
          to={`/editarexercicio/${exercicio.id}`}
          className="w-full text bg-amber-400 hover:bg-amber-500
          flex items-center justify-center py-2"
        >
          <PencilSimpleLine size={32}/>
        </Link>

        {/* Botão Deletar */}
        <Link
          to={`/deletarexercicio/${exercicio.id}`}
          className="text bg-amber-400 hover:bg-amber-500 w-full
          flex items-center justify-center py-2"
        >
          <Trash size={32} />
        </Link>
      </div>

    </div>
  )
}

export default CardExercicios
