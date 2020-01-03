function reqListener() {
  const data = JSON.parse(this.responseText);
  renderBreweries(data);
}

function fetch() {
  const req = new XMLHttpRequest();

  req.addEventListener("load", reqListener);

  req.open("GET", "https://api.openbrewerydb.org/breweries");
  req.send();
}

fetch();

function renderBreweries(ar) {
  const tbodyEl = document.querySelector("tbody");

  for (let i = 0; i < ar.length; i += 1) {
    const trEl = document.createElement("tr");

    const tdNameEl = document.createElement("td");
    const tdAddressEl = document.createElement("td");

    tdNameEl.textContent = ar[i].name;
    tdAddressEl.textContent = ar[i].street;

    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdAddressEl);

    tbodyEl.appendChild(trEl);
  }
}
