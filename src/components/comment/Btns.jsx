import BtnDelete from "./btns/BtnDelete";
import BtnLike from "./btns/BtnLike";

export default function Btns() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BtnLike />
      <BtnDelete />
    </div>
  );
}
