import Btns from "./comment/Btns";
import Contents from "./comment/Contents";

function Comment({ data, handleStatus, suppression }) {
  return (
    <div
      style={{
        padding: "0 5%",
        border: "1px solid #333333",
        borderRadius: "20px",
        display: "flex",
        gap: "20px",
        margin: "10px 0",
      }}
    >
      <Contents data={data} />
      <Btns
        data={data}
        handleStatus={handleStatus}
        handleDelete={suppression}
      />
    </div>
  );
}

export default Comment;
