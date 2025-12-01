import ModalExercicio from "../../components/exercicio/modalexercicio/ModalExercicio"

function Home() {
  return (
    <>
      <div className=" flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          {/* coluna 1 */}
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vinde!
            </h2>

            <p className='text-xl'>
              Treinos organizados, você motivade!
            </p>

            <div className='flex justify-around gap-4'>
               <ModalExercicio />
            </div>
          </div>
          {/* coluna 2 */}
          <div className="flex justify-center w-full">
            {/* <img
              src="https://ik.imagekit.io/Thalima23/Copilot_20251128_180945.png"
              alt="Imagem Página Home"
              className='w-2/3'
            /> */}
            <img
              src="https://ik.imagekit.io/hnkqnvn7cu/ShapeFit.gif"
              alt="Imagem Página Home"
              className='w-auto h-[70vh] rounded-md'/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
