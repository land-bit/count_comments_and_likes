import like from "../../../assets/icons/like.svg";
import likeAgain from "../../../assets/icons/like_again.svg";

export default function BtnLike() {
  let status = false;
  return (
    <button>
      <img src={status ? like : likeAgain} alt="" />
    </button>
  );
}
