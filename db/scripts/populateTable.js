const { query } = require("../index");
const userNames = [
    {
    name:'Ben',
    mind:1,
    gartic:3,
    scavenger_hunt:2,
    scattergories:0,
    movie_game:2
    },

    {
    name:'Tao',
    mind:1,
    gartic:3,
    scavenger_hunt:2,
    scattergories:0,
    movie_game:2
    },

    {
    name:'Liz.k',
    mind:1,
    gartic:3,
    scavenger_hunt:2,
    scattergories:0,
    movie_game:2
    },
    
    {
    name:'Chris',
    mind:1,
    gartic:3,
    scavenger_hunt:2,
    scattergories:0,
    movie_game:2
    },
    
    {
    name:'Mell',
    mind:1,
    gartic:3,
    scavenger_hunt:2,
    scattergories:0,
    movie_game:2}
];


const sqlStatement = `
    INSERT INTO energiser_scoresheet (name,mind,gartic,scavenger_hunt,scattergories,movie_game) 
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;
    `;

async function populateTable(array) {
    for (let i = 0;i <array.length;i++){
  let values = [array[i].name, array[i].mind, array[i].gartic, array[i].scavenger_hunt, array[i].scattergories, array[i].movie_game]  
  const result = await query(sqlStatement,values);
  console.log(result);
}
};
populateTable(userNames);






