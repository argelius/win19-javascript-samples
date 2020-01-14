/* Implement your solution here */

const mainEl = document.querySelector("main");

function renderList(names) {
  const ulEl = document.createElement("ul");

  for (let i = 0; i < names.length; i += 1) {
    const liEl = document.createElement("li");
    liEl.textContent = names[i];
    ulEl.appendChild(liEl);
  }

  mainEl.appendChild(ulEl);
}

getData()
  .then((response) => {
    const ob = JSON.parse(response);
    const ar = ob.data;
    const names = ar.map(x => x.name);

    renderList(names);
  });

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      data: [
        {name: 'Knatte'},
        {name: 'Fnatte'},
        {name: 'Tjatte'},
      ],
    }));
  });
}
