import { MdDelete } from "react-icons/md";
import "../../styles/buttons//ButtonDeleteStyles.css";

type props = {
  onClick: () => void;
};

function ButtonDelete({ onClick }: props) {
  return (
    <button className="ButtonDelete" type="button" onClick={onClick}>
      <MdDelete size={20} color="#fff" />
    </button>
  );
}
export default ButtonDelete;
