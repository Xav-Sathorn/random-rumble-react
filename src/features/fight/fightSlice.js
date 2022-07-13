import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
      2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
      3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
      4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
    },
  ],
  monster: {
    pv: 800,
    pvMax: 800,
  },
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {},
});

export default fightSlice.reducer;
