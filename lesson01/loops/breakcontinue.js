var i = 0;

for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }

  if (i === 5) {
    break;
  }

  console.log(i);
}
