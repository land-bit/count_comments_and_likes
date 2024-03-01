import BtnAdd from "./en-tete/BtnAdd";
import Title from "./en-tete/Title";

export default function EnTete({ nbr, like }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "70px",
        alignItems: "center",
        position: "sticky",
        top: "0",
        backgroundColor: "#fff",
      }}
    >
      <Title nbr={nbr} like={like} />
      <BtnAdd />
    </div>
  );
}
