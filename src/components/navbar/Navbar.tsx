import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 
               bg-linear-to-b from-pink-600 via-purple-500 to-purple-600 text-(--charcoal)'>
                

                <div className="container flex justify-between text-lg mx-8">
                   <Link to='/' className="text-2xl font-bold">ShapeFit</Link>
                    <div className='flex gap-4'> 
                        <Link to='/' className='hover:underline'>Home</Link>
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/exercicios' className='hover:underline'>Exercicios</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='/about' className='hover:underline'>Sobre Nós</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
