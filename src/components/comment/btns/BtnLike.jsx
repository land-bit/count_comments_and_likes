import like from "../../../assets/icons/like.svg";
import likeAgain from "../../../assets/icons/like_again.svg";

export default function BtnLike({ status, handleStatus }) {
  return (
    <button onClick={handleStatus}>
      <img src={status ? like : likeAgain} alt="" />
    </button>
  );
}
