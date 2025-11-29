import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Exercicio from "../../../models/Exercicio";
import CardExercicio from "../cardexercicio/CardExercicio";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaExercicios() {

    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarExercicios() {
        setIsLoading(true);
        try {
            await buscar("/exercicios", setExercicios);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarExercicios();
    }, []);

    useEffect(() => {
        if (!isLoading && exercicios.length === 0) {
            ToastAlerta("Nenhum exercício encontrado!", "info");
        }
    }, [isLoading, exercicios]);

    return (
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col mx-2">

                {isLoading && (
                    <div className="flex justify-center text-5xl animate-bounce my-8">
                        🏋🏽‍♀️
                    </div>
                )}

                {!isLoading && exercicios.length === 0 && (
                    <p className="text-center text-2xl my-6">
                        Nenhum exercício encontrado!
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exercicios.map((exercicio) => (
                        <CardExercicio key={exercicio.id} exercicio={exercicio} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaExercicios;
