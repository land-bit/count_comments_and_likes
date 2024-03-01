function Contents({ data }) {
  return (
    <div>
      <h2>{data.postNom + " " + data.nom}</h2>
      <p>{data.comment}</p>
    </div>
  );
}

export default Contents;
