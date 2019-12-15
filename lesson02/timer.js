function timer(seconds) {
  let interval;

  function onTick() {
    console.log(seconds, "seconds left");
    seconds--;

    if (seconds === -1) {
      console.log("Done!");
      clearInterval(interval);
    }
  }

  interval = setInterval(onTick, 1000);
}

timer(5);
