const { query } = require("../index");

const sqlStatement = `
    CREATE TABLE energiser_scoresheet (
        id SERIAL PRIMARY KEY,
        name TEXT,
        mind INTEGER,
        gartic INTEGER,
        scavenger_hunt INTEGER,
        scattergories INTEGER,
        movie_game INTEGER
    );
`;

async function createTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

createTable();
