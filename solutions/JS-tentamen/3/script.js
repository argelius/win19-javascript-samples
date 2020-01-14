/* Implement your solution here */

const KEYS = ["name", "occupation", "age"];

const mainEl = document.querySelector("main");

function renderTable(data) {
  const tableEl = document.createElement("table");

  const theadEl = document.createElement("thead");
  theadEl.style.textTransform = "capitalize";

  const tbodyEl = document.createElement("tbody");

  const headerTrEl = document.createElement("tr");

  for (let i = 0; i < KEYS.length; i += 1) {
    const thEl = document.createElement("th");
    thEl.textContent = KEYS[i];
    headerTrEl.appendChild(thEl);
  }

  for (let i = 0; i < data.length; i += 1) {
    const trEl = document.createElement("tr");

    for (let j = 0; j < KEYS.length; j += 1) {
      const tdEl = document.createElement("td");
      tdEl.textContent = data[i][KEYS[j]];
      trEl.appendChild(tdEl);
    }

    tbodyEl.appendChild(trEl);
  }

  theadEl.appendChild(headerTrEl);
  tableEl.appendChild(theadEl);
  tableEl.appendChild(tbodyEl);
  mainEl.appendChild(tableEl);
}

/* Do not touch anything below this line */
let data = [
  {name: 'Rachel Green', occupation: 'Waitress', age: 24},
  {name: 'Monica Geller', occupation: 'Chef', age: 24},
  {name: 'Phoebe Buffay', occupation: 'Massage therapist', age: 27},
  {name: 'Joey Tribbiani', occupation: 'Actor', age: 25},
  {name: 'Chandler Bing', occupation: 'Transponster?', age: 26},
  {name: 'Ross Geller', occupation: 'Paleontologist', age: 26},
];
renderTable(data);
