import "../../../styles/Home/list/HomeTaskStyles.css";
import type { taskType } from "../../../types/taskTypes";
import ButtonCheckList from "../../Buttons/ButtonChecklistComponent";
import ButtonDelete from "../../Buttons/ButtonDeleteComponent";
import ButtonDetails from "../../Buttons/ButtonDetailsComponent";
import { useNavigate } from "react-router-dom";

type props = {
  tarefa: taskType;
  deleteTask: (id: number) => void;
};

function HomeTaskComponent({ tarefa, deleteTask }: props) {
  const navigate = useNavigate();

  function onDelete() {
    deleteTask(tarefa.id);
  }

  function onDetails() {
    navigate("/details", {
      state: { description: tarefa.description },
    });
  }

  return (
    <div className="HomeTask_body">
      <div>
        <ButtonCheckList onClick={onDelete} />
      </div>
      <div className="HomeTask_task">
        <h4>{tarefa.title}</h4>
      </div>
      <ButtonDetails onClick={onDetails} />
      <ButtonDelete onClick={onDelete} />
    </div>
  );
}

export default HomeTaskComponent;
