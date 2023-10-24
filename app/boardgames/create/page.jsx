"use client";
import { useState } from "react";
import { XMLParser } from "fast-xml-parser";

const options = {
  ignoreAttributes: false,
};

const Page = () => {
  const [bggLink, setBggLink] = useState("");
  const [boardgames, setBoardgames] = useState([]);

  const saveToDB = () => {
    console.log(boardgames);
  };

  const getBggGameInfo = (e) => {
    e.preventDefault();
    const id = bggLink.split("/")[4];
    console.log(bggLink);
    fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${id}`)
      .then((res) => res.text())
      .then((data) => {
        const parser = new XMLParser(options);
        const {
          items: { item },
        } = parser.parse(data);
        if (item) {
          const exp = item.link.filter((link) => link["@_type"] === "boardgameexpansion");
          console.log(exp);
          console.log(item);
          setBoardgames((prevState) => [
            ...prevState,
            {
              title: item.name[0]
                ? item.name[0]["@_value"].toLowerCase()
                : item.name["@_value"].toLowerCase(),
              thumbnail: item.thumbnail,
              image: item.image,
              isExpansion: item["@_type"] === "boardgameexpansion",
              year: item.yearpublished["@vaule"],
              minPlayers: item.minplayers["@_value"],
              maxPlayers: item.maxplayers["@_value"],
              minPlayTime: item.minplaytime["@_value"],
              maxPlayTime: item.maxplaytime["@_value"],
              minAge: item.minage["@_value"],
              description: item.description,
              bggId: id,
              bggLink,
            },
          ]);
          setBggLink("");
        } else {
          console.log("please try again");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <section>
      <form onSubmit={getBggGameInfo}>
        <input
          type="text"
          placeholder="bgg link"
          value={bggLink}
          onChange={(e) => setBggLink(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {boardgames.length >= 1 && (
        <div>
          {boardgames.map((bg) => (
            <>
              <h3>{bg.title}</h3>
              <img src={bg.thumbnail} alt="" />
              <p>{bg.year}</p>
              <p>
                {bg.minPlayTime} - {bg.maxPlayTime}
              </p>
              <p>
                {bg.minPlayers} - {bg.maxPlayers}
              </p>
              <p>{bg.minAge}+</p>
              <p>{bg.description}</p>
              <p>{bg.bggId}</p>
              <p>{bg.bggLink}</p>
            </>
          ))}
          <button className="btn btn-outline" onClick={saveToDB}>
            Save
          </button>
        </div>
      )}
    </section>
  );
};

export default Page;
