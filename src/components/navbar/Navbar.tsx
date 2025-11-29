import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 
                bg-violet-700 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                   <Link to='/home' className="text-2xl font-bold">ShapeFit</Link>

                   
                    <div className='flex gap-4'> 
                        Home
                       <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/exercicios' className='hover:underline'>Exercicios</Link>
                        Perfil
                        Sobre Nós
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
