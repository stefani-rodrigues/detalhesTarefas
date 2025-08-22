import HomeTaskComponent from "./HomeTaskComponent";
import "../../../styles/Home/list/HomeLisTaskStyles.css";
import type { taskType } from "../../../types/taskTypes";

type props = {
  listaTarefas: taskType[];
  deleteTask: (id: number) => void;
};
function HomeLisTaskComponent({ listaTarefas, deleteTask }: props) {
  return (
    <div className="HomeListTask_Body">
      {listaTarefas.map((tarefa, index) => {
        return (
          <HomeTaskComponent
            tarefa={tarefa}
            key={index}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}
export default HomeLisTaskComponent;
