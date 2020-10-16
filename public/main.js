// In index html create a section where the table can be appended
// use query selector to select the section in js
const tableSection = document.querySelector("#table");
const totalTable = document.querySelector("#total");
const refrshTable = document.querySelector("#updateTable");
const submitButton = document.querySelector("button[type='submit']");




// write an async function to fetch data from our database

async function getTable() {
  const response = await fetch("/total");
  const { payload } = await response.json();
  console.log(payload);
  payload.forEach(createTable);
}

// Function to append all items to tableSection
// append the article to the tableSection

function createTable(user) {
  const row = createUserRows(user);
  totalTable.appendChild(row);
  //   const table = document.createElement("table");
  //   table.appendChild(article);
}

// deconstruct the payload array
// reset the innerhtml "" of table section

function createUserRows({
  name,
  mind,
  gartic,
  scavenger_hunt,
  scattergories,
  movie_game,
  total,
}) {
  const row = document.createElement("tr");
  const tdUserName = document.createElement("td");

  const tdMind = document.createElement("td");
  const tdGartic = document.createElement("td");
  const tdScavengerHunt = document.createElement("td");
  const tdScattergories = document.createElement("td");
  const tdMovieGame = document.createElement("td");
  const tdTotal = document.createElement("td");
  tdUserName.innerText = name;

  tdMind.innerText = mind;
  tdGartic.innerText = gartic;
  tdScavengerHunt.innerText = scavenger_hunt;
  tdScattergories.innerText = scattergories;
  tdMovieGame.innerText = movie_game;
  tdTotal.innerText = total;

  row.appendChild(tdUserName);
  row.appendChild(tdMind);
  row.appendChild(tdMind);
  row.appendChild(tdGartic);
  row.appendChild(tdScavengerHunt);
  row.appendChild(tdScattergories);
  row.appendChild(tdMovieGame);
  row.appendChild(tdTotal);
  return row;
}

const gameSelectorButton = 

getTable();
// write another function to append each item on the array to the dom
// function that destructures {name, total} from payload
// create an div/article
// create h2 element for the name
// create h3 element for the total
// set innerText of both elements with name / total variables
// append child of article with each h2/h3 element
// return article
