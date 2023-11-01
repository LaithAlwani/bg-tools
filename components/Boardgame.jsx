function Boardgame({ boardgame }) {
  const {
    title,
    thumbnail,
    year,
    minPlayTime,
    maxPlayTime,
    minPlayers,
    maxPlayers,
    minAge,
    bggId,
    price
  } = boardgame;
  return (
    <>
      <h3>{title}</h3>
      <a href={`https://boardgamegeek.com/boardgame/${bggId}`} target="_blank">
        <img src={thumbnail} alt="" />
      </a>
      <p>{year}</p>
      <p>
        {minPlayTime} - {maxPlayTime}
      </p>
      <p>
        {minPlayers} - {maxPlayers}
      </p>
      <p>{minAge}+</p>
      
      <p>{bggId}</p>
    </>
  );
}

export default Boardgame;
