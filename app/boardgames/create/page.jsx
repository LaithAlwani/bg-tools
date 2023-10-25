"use client";
import { useState } from "react";
import { XMLParser } from "fast-xml-parser";
import Authenticate from "@components/Authenticate";
import Boardgame from "@components/Boardgame";

const Page = () => {
  const [bggId, setBggId] = useState("");
  const [boardgames, setBoardgames] = useState([]);

  const saveToDB = () => {
    console.log(boardgames);
  };

  const getBggGameInfo = (e) => {
    e.preventDefault();
    fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${bggId}`)
      .then((res) => res.text())
      .then((data) => {
        const parser = new XMLParser({ignoreAttributes: false});
        const {
          items: { item },
        } = parser.parse(data);
        if (item) {
          // const exp = item.link.filter((link) => link["@_type"] === "boardgameexpansion");
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
              bggId,
              
            },
          ]);
          setBggId("");
        } else {
          console.log("please try again");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Authenticate>
      <form onSubmit={getBggGameInfo}>
        <input
          type="text"
          placeholder="bgg Id"
          value={bggId}
          onChange={(e) => setBggId(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {boardgames.length >= 1 && (
        <div>
          {boardgames.map((boardgame) => (
            <Boardgame key={boardgame.bggId} boardgame={boardgame} />
          ))}
          <button className="btn btn-outline" onClick={saveToDB}>
            Save
          </button>
        </div>
      )}
    </Authenticate>
  );
};

export default Page;
