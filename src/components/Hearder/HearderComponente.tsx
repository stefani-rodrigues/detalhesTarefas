import { MdOutlineArrowBack } from "react-icons/md";
import "../../styles/hearder/HearderComponentStyles.css";

type props = {
  onClick: () => void;
};
function HeaderComponent({ onClick }: props) {
  return (
    <div className="HeaderComponentBody">
      <MdOutlineArrowBack
        type="button"
        size={30}
        className="button"
        onClick={onClick}
      />
      <div className="title">Detalhes da Tarefa</div>
    </div>
  );
}

export default HeaderComponent;
