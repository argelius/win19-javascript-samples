(function () {
  const formEl = document.querySelector("form");

  function onSubmit(e) {
    e.preventDefault();

    const postReq = new XMLHttpRequest();

    postReq.open("POST", "/todos");
    postReq.setRequestHeader("Content-Type", "application/json");

    const titleEl = document.getElementById("title");

    const ob = { title: titleEl.value };

    postReq.send(JSON.stringify(ob));
  }

  formEl.addEventListener("submit", onSubmit);
}())
