import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = (displayPlayers) => {
  const [state, setState] = useState([
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  ]);

  displayPlayers = () => {
    return Object.keys(state).map((key) => (
      <PlayerCard key={state[key].id} player={state[key]} />
    ));
  };

  return <div className="row">{displayPlayers()}</div>;
};

export default PlayerList;
