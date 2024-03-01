import BtnDelete from "./btns/BtnDelete";
import BtnLike from "./btns/BtnLike";

export default function Btns({ data, handleStatus, handleDelete }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BtnLike status={data.status} handleStatus={handleStatus} />
      <BtnDelete handleDelete={handleDelete} />
    </div>
  );
}
