import "../../styles/Buttons/PrimaryButtonStyle.css";

type props = {
  onClick: () => void;
};

function PrimaryButton({ onClick }: props) {
  return (
    <button className="AddButton" type="button" onClick={onClick}>
      Adicionar
    </button>
  );
}

export default PrimaryButton;
