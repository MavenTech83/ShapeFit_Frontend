import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormExercicio from '../formexercicio/FormExercicio';


function ModalExercicio() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border-3 rounded px-4 py-2 hover:bg-white hover:text-pink-400 font-bold'>
                       Novo Exercício
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormExercicio />
            </Popup>
        </>
    );
}

export default ModalExercicio;
