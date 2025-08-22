import "../../styles/buttons//ButtonCheckListeStyles.css";
import { FaCheck } from "react-icons/fa";

type props = {
  onClick: () => void;
};

function ButtonCheckList({ onClick }: props) {
  return (
    <button className="ButtonCheck" type="button" onClick={onClick}>
      <FaCheck size={20} color="#7ed957" />
    </button>
  );
}
export default ButtonCheckList;
