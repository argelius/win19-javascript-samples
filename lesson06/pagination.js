(function(d) {
  const API_URL = "https://api.openbrewerydb.org/breweries";
  let page = 1;
  let loading = false;

  const prevButton = d.getElementById("prev");
  const nextButton = d.getElementById("next");

  prevButton.addEventListener("click", () => {
    if (loading) {
      return;
    }

    page = Math.max(1, page - 1);
    fetchBreweries();
  });

  nextButton.addEventListener("click", () => {
    if (loading) {
      return;
    }

    page += 1;
    fetchBreweries();
  });

  function onLoad() {
    loading = false;
    const breweries = JSON.parse(this.responseText);
    const listEl = d.getElementById("list");
    listEl.innerHTML = "";

    breweries.forEach((brewery) => {
      const listItemEl = d.createElement("li");
      listItemEl.textContent = brewery.name;
      listEl.appendChild(listItemEl);
    });
  }

  function fetchBreweries() {
    loading = true;
    const req = new XMLHttpRequest();

    req.addEventListener("load", onLoad);

    req.open("GET", `${API_URL}?page=${page}`);
    req.send();
  }

  fetchBreweries();
}(document))
