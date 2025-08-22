import { useEffect, useState } from "react";
import HomeLisTaskComponent from "../components/Home/Lists/HomeListTaskComponent";
import RegisterComponent from "../components/Home/Register/RegisterComponent";
import "../styles/pages/HomePagesStyles.css";
import type { taskType } from "../types/taskTypes";

function HomePages() {
  const [listTask, setListask] = useState<taskType[]>(() => {
    const dadosSalvos = localStorage.getItem("listaTarefas");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("listaTarefas", JSON.stringify(listTask));
  }, [listTask]);

  function addTask(titulo: string, descricao: string) {
    const novaLista: taskType[] = [
      ...listTask,
      {
        id: listTask.length + 1,
        title: titulo,
        description: descricao,
      },
    ];

    setListask(novaLista);
  }

  function deleteTask(id: number) {
    const novaLista: taskType[] = listTask.filter((tarefa) => tarefa.id !== id);
    setListask(novaLista);
  }

  return (
    <div className="HomePagesBody">
      <div className="title">Gerenciamento de tarefas</div>
      <RegisterComponent addTask={addTask} />
      <div className="titleList">Listas de tarefas</div>
      <HomeLisTaskComponent listaTarefas={listTask} deleteTask={deleteTask} />
    </div>
  );
}

export default HomePages;
