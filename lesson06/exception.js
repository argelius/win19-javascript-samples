const myJsonString = '{ "a": 10';

try {
  const myOb = JSON.parse(myJsonString);
} catch (err) {
  console.log("Det var fel på datan");
}

console.log("Exit");
