import logo from "../../assets/icons/logo.svg";

export default function Title({ nbr, like }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <img src={logo} alt="Logo" />
      <h1>
        Vous avez {nbr > 1 ? nbr + " commentaires" : nbr + " commentaire"} et{" "}
        {like > 1 ? like + " likes" : like + " like"}
      </h1>
    </div>
  );
}
