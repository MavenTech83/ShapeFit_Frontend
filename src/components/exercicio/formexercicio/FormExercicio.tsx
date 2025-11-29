import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import type Exercicio from "../../../models/Exercicio";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormExercicio() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [exercicio, setExercicio] = useState<Exercicio>({
        id: 0,
        nome: "",
        descricao: "",
        categoria: null,
    });

    // BUSCAR EXERCICIO POR ID (modo edição)
    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio);
        } catch (error) {
            console.log("Erro ao buscar exercício", error);
        }
    }
    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error) {
            console.log("Erro ao carregar categorias", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarExercicioPorId(id);
        }
    }, [id]);

    useEffect(() => {
        buscarCategorias();

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

    function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
        const idCategoria = Number(e.target.value);

        const categoriaSelecionada = categorias.find(cat => cat.id === idCategoria) || null;

        setExercicio({
            ...exercicio,
            categoria: categoriaSelecionada
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
                ToastAlerta('Exercício atualizado com sucesso!', 'info');
            } else {
                // CADASTRAR
                await cadastrar(`/exercicios`, exercicio, setExercicio);
                ToastAlerta('Exercício cadastrado com sucesso!', 'info');
            }
        } catch (error) {
            console.log("Erro ao salvar exercício", error);
            ToastAlerta('Erro ao salvar exercício', 'error');
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

                {/* CATEGORIA */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        name="categoria"
                        className="border-2 border-slate-700 rounded p-2"
                        onChange={selecionarCategoria}
                        value={exercicio.categoria?.id ?? ""}
                        required
                    >
                        <option value="">Selecione uma Categoria</option>

                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
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
