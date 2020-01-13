function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ a: 10 });
    }, 200);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("An error occurred!");
  });
