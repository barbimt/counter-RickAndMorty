

const Character = ({c}) => {
  return (
    <article>
      <div>
        <p>{c.name}</p>
        <img src={c.image} alt={c.alt} />
        <h3>{c.status}</h3>
      </div>
    </article>
  );
};

export default Character;
