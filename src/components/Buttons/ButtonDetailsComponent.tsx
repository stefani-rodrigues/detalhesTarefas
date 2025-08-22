import "../../styles/buttons/ButtonDetailsStyles.css";
import { IoIosArrowForward } from "react-icons/io";
type props = {
  onClick: () => void;
};
function ButtonDetails({ onClick }: props) {
  return (
    <button className="ButtonDetails">
      <IoIosArrowForward
        size={20}
        color="#fff"
        type="button"
        onClick={onClick}
      />
    </button>
  );
}

export default ButtonDetails;
