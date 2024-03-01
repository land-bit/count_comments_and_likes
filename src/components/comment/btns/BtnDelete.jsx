import btndelete from "../../../assets/icons/delete.svg";

export default function BtnDelete({ handleDelete }) {
  return (
    <button onClick={handleDelete}>
      <img src={btndelete} alt="" />
    </button>
  );
}
