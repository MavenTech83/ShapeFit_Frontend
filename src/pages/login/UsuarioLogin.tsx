import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    function handleLogin(event) {
        event.preventDefault()
        
        const nomeUsuario = email.split("@")[0]
        const nomeCapitalizado = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1)
        
        const usuario = {
            nome: nomeCapitalizado,
            email: email
        }
        
        localStorage.setItem("usuario", JSON.stringify(usuario))
        navigate("/perfil")
    }

    return (
        <>
            <div className="bg-violet-700 flex justify-center min-h-screen">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Entrar
                        </h2>
                        <p className='text-xl'>
                            Digite seu email para acessar sua conta
                        </p>
                        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-2/3">
                            <input
                                type="email"
                                placeholder="Seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 rounded-lg text-gray-800"
                                required
                            />
                            <button 
                                type="submit"
                                className="bg-white text-violet-700 font-bold py-3 rounded-lg hover:bg-violet-100 transition"
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/Thalima23/Copilot_20251128_180945.png"
                            alt="Imagem Login"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login