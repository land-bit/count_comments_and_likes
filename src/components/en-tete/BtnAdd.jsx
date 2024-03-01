import { Link } from "react-router-dom";
import add from "../../assets/icons/add.svg";

export default function BtnAdd() {
  return (
    <button>
      <img src={add} alt="+" />
    </button>
  );
}
