const { query } = require("../index");
const userNames = [
  {
    name: "Ben",
    mind: 1,
    gartic: 3,
    scavenger_hunt: 2,
    scattergories: 0,
    movie_game: 2,
  },

  {
    name: "Tao",
    mind: 1,
    gartic: 3,
    scavenger_hunt: 2,
    scattergories: 0,
    movie_game: 2,
  },

  {
    name: "Liz.k",
    mind: 1,
    gartic: 3,
    scavenger_hunt: 2,
    scattergories: 0,
    movie_game: 2,
  },

  {
    name: "Chris",
    mind: 1,
    gartic: 3,
    scavenger_hunt: 2,
    scattergories: 0,
    movie_game: 2,
  },

  {
    name: "Mell",
    mind: 1,
    gartic: 3,
    scavenger_hunt: 2,
    scattergories: 0,
    movie_game: 2,
  },
];

const sqlStatement = `
    UPDATE energiser_scoresheet
    SET mind = 4, scattergories = 2, gartic = 8
    WHERE id = 5
    `;

async function updateTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

updateTable();
