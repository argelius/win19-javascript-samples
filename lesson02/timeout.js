let i = 0;

const interval = setInterval(function () {
  i += 1;
  console.log(i, "seconds");

  if (i === 5) {
    console.log("Stop!");
    clearInterval(interval);
  }
}, 1000);
