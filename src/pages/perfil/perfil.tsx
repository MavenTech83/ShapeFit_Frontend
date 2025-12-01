import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import type Exercicio from "../../models/Exercicio"
import type Categoria from "../../models/Categoria"
import { buscar } from "../../services/Service"

function Perfil() {
    const navigate = useNavigate()
    const [exercicios, setExercicios] = useState<Exercicio[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [loading, setLoading] = useState(true)
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [resultadoIMC, setResultadoIMC] = useState<number | null>(null)
    const [treino, setTreino] = useState<Exercicio[]>([])
    const [nomeSelecionaCategoria, setSelecionaCategoria] = useState("")

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias)
        } catch (error) {
            console.error("Ops... Houve um erro ao exibir as categorias! Tente novamente.")
        }
    }

    async function buscarExercicios() {
        try {
            await buscar("/exercicios", setExercicios)
        } catch (error) {
            console.error("Ops... Houve um erro ao exibir os exercícios! Tente novamente.")
        }
    }

    function calcularIMC() {
        const pesoNum = parseFloat(peso)
        const alturaNum = parseFloat(altura)
        
        if (pesoNum > 0 && alturaNum > 0) {
            const imc = pesoNum / (alturaNum * alturaNum)
            setResultadoIMC(imc)
        }
    }

    function selecionaCategoriaETreino(categoriaId: number, nomeCategoria: string) {
        const exerciciosDaCategoria = exercicios.filter(
            ex => ex.categoria?.id === categoriaId  
        )

        if (exerciciosDaCategoria.length === 0) {
            alert("Ops... Nenhum exercício foi encontrado nesta categoria!")
            return 
        }
        
        const quantidade = Math.min(
            Math.floor(Math.random() * 3) + 3,
            exerciciosDaCategoria.length
        )

        const exerciciosSelecionados = [...exerciciosDaCategoria]
            .sort(() => Math.random() - 0.5)
            .slice(0, quantidade)

        setTreino(exerciciosSelecionados)
        setSelecionaCategoria(nomeCategoria)

        localStorage.setItem('meuTreino', JSON.stringify({
            categoria: nomeCategoria,
            exercicios: exerciciosSelecionados
        }))
    }
    
    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}")

    useEffect(() => {
        if (!usuario.email) {
            navigate("/usuarioLogin")
            return
        }
        buscarCategorias()
        buscarExercicios()
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className="bg-violet-700 flex justify-center items-center min-h-screen">
                <p className="text-white text-2xl">Carregando...</p>
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-center min-h-screen py-8">
                <div className='container grid grid-cols-2 text-white gap-8'>
                    <div className="flex flex-col gap-4 items-center justify-start py-4">
                        <h2 className='text-5xl font-bold'>
                            Oi, {usuario.nome}!
                        </h2>
                        <p className='text-xl'>
                            Que bom que você tá aqui! 😊
                        </p>
                        
                        {/* Calculadora de IMC */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg w-2/3">
                            <h3 className="text-2xl font-bold mb-4">Calculadora de IMC</h3>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <label className="block mb-2">Peso (kg):</label>
                                    <input 
                                        type="number"
                                        step="0.01"
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                        className="w-full p-2 rounded-lg text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2">Altura (m):</label>
                                    <input 
                                        type="number" 
                                        step="0.01"
                                        value={altura}
                                        onChange={(e) => setAltura(e.target.value)}
                                        placeholder="Preencha assim (exemplo): 1.62"
                                        className="w-full p-2 rounded-lg text-gray-800"
                                    />
                                </div>
                                <button 
                                    onClick={calcularIMC}
                                    className="bg-white text-violet-700 font-bold py-2 rounded-lg hover:bg-violet-100 transition mt-2"
                                >
                                    Calcular
                                </button>
                                {resultadoIMC !== null && (
                                    <div className="mt-4 p-4 bg-white/20 rounded-lg">
                                        <p className="text-xl font-bold">Seu IMC: {resultadoIMC.toFixed(2)}</p>
                                        <p className="text-sm mt-2">
                                            Lembre-se: o IMC é só um indicador, não um diagnóstico. 
                                            Para orientar sua alimentação e saúde com segurança, busque médic@s e nutricionist@s 🤍
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Categorias de Exercícios */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg w-2/3">
                            <h3 className="text-2xl font-bold mb-4">Monte seu Treino</h3>
                            
                            {categorias.length === 0 ? (
                                <p className="text-center">Nenhuma categoria cadastrada ainda.</p>
                            ) : (
                                <>
                                    <p className="mb-3">Escolha uma categoria:</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {categorias.map((categoria) => (
                                            <button
                                                key={categoria.id}
                                                onClick={() => selecionaCategoriaETreino(categoria.id, categoria.nome)}
                                                className="p-4 rounded-lg font-bold bg-white/20 hover:bg-white hover:text-violet-700 transition"
                                            >
                                                {categoria.nome}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Treino Montado */}
                                    {treino.length > 0 && (
                                        <div className="mt-4 p-4 bg-white/20 rounded-lg">
                                            <p className="font-bold mb-3 text-lg">
                                                ✨ Seu treino de {nomeSelecionaCategoria} ({treino.length} exercícios):
                                            </p>
                                            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                                                {treino.map((exercicio, index) => (
                                                    <div 
                                                        key={exercicio.id}
                                                        className="bg-white/10 p-3 rounded"
                                                    >
                                                        <p className="font-semibold">
                                                            {index + 1}. {exercicio.nome}
                                                        </p>
                                                        <p className="text-sm opacity-80">
                                                            {exercicio.descricao}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm mt-3 text-center opacity-80">
                                                Treino salvo automaticamente! 💪
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center items-start pt-4">
                        <img
                            src="https://ik.imagekit.io/Thalima23/Copilot_20251128_180945.png"
                            alt="Imagem Perfil"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil