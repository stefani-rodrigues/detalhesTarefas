import "../../styles/Buttons/PrimaryButtonStyle.css";
import { CgAdd } from "react-icons/cg";

type props = {
  onClick: () => void;
};

function PrimaryButton({ onClick }: props) {
  return (
    <button className="AddButton" type="button" onClick={onClick}>
      Adicionar
      <CgAdd size={20} />
    </button>
  );
}

export default PrimaryButton;
