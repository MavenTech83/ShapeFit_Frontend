import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormExercicio from '../formcategoria/FormCategoria'


function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 hover:bg-white hover:text-amber-800'>
                       Nova Categoria
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

export default ModalCategoria;
