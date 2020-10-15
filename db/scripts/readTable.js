const { query } = require("../index");

const sqlStatement = `SELECT * FROM energiser_scoresheet 
`;

async function readTableAll() {
  const result = await query(sqlStatement);
  console.log(result.rows);
  return result.rows;
}

readTableAll();
