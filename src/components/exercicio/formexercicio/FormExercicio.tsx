import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import type Exercicio from "../../../models/Exercicio";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormExercicio() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [exercicio, setExercicio] = useState<Exercicio>({
        id: 0,
        nome: "",
        descricao: "",
    });

    // BUSCAR EXERCICIO POR ID (modo edição)
    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio);
        } catch (error) {
            console.log("Erro ao buscar exercício", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarExercicioPorId(id);
        }
    }, [id]);

    // ATUALIZA CAMPOS DO FORM
    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate('/exercicios');
    }

    // SALVAR EXERCICIO (cadastrar ou atualizar)
    async function salvar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                // EDITAR
                await atualizar(`/exercicios`, exercicio, setExercicio);
                alert('Exercício atualizado com sucesso!');
            } else {
                // CADASTRAR
                await cadastrar(`/exercicios`, exercicio, setExercicio);
                alert('Exercício cadastrado com sucesso!');
            }
        } catch (error) {
            console.log("Erro ao salvar exercício", error);
            alert('Erro ao salvar exercício');
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Exercício' : 'Cadastrar Exercício'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={salvar}>

                {/* NOME */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Exercício</label>
                    <input
                        type="text"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                {/* DESCRIÇÃO */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.descricao}
                        onChange={atualizarEstado}
                    ></textarea>
                </div>

                {/* BOTÃO */}
                <button
                    type="submit"
                    className="rounded bg-purple-500 hover:bg-purple-700 text-white font-bold w-full py-2"
                    disabled={isLoading}
                >
                    {isLoading ?
                        <ClipLoader size={24} color="#ffffff" /> :
                        id !== undefined ? 'Atualizar' : 'Cadastrar'}
                </button>

            </form>
        </div>
    );
}

export default FormExercicio;
