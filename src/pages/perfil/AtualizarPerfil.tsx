import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AtualizarPerfil() {
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario") || "{}")
        if (!usuario.email) {
            navigate("/usuarioLogin")
            return
        }
        setNome(usuario.nome)
        setEmail(usuario.email)
        setLoading(false)
    }, [])

    function handleAtualizar(event: React.FormEvent) {
        event.preventDefault()
        
        const nomeCapitalizado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
        
        const usuarioAtualizado = {
            nome: nomeCapitalizado,
            email,
        }
        localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado))
        navigate("/perfil")
    }

    if (loading) {
        return (
            <div className="bg-violet-700 flex justify-center items-center min-h-screen">
                <p className="text-white text-2xl">Carregando...</p>
            </div>
        )
    }

    return (
        <>
            <div className="bg-violet-700 flex justify-center min-h-screen">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Atualizar Perfil
                        </h2>
                        <p className='text-xl'>
                            Mantenha suas informações atualizadas
                        </p>
                        <form onSubmit={handleAtualizar} className="flex flex-col gap-4 w-2/3">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="p-3 rounded-lg text-gray-800"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 rounded-lg text-gray-800"
                                required
                            />
                            <button 
                                type="submit"
                                className="bg-white text-violet-700 font-bold py-3 rounded-lg hover:bg-violet-100 transition"
                            >
                                Salvar alterações
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/Thalima23/Copilot_20251128_180945.png"
                            alt="Imagem Atualizar Perfil"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AtualizarPerfil