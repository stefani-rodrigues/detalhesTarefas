import "../styles/pages/DetailsPagesStyles.css";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/Hearder/HearderComponente";

function DetailsPages() {
  const location = useLocation();
  const { description } = location.state || {};
  const navigate = useNavigate();

  function onBack() {
    navigate("/home");
  }

  return (
    <div className="DetailsPagesBody">
      <HeaderComponent onClick={onBack} />
      <div className="title">{description}</div>
    </div>
  );
}

export default DetailsPages;
