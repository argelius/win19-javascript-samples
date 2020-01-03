const myObject = {
  foo: 13,
  bar: "a string",
  baz: [1, 2, 3, 4],
};

const myJsonString = JSON.stringify(myObject, null, 2);

console.log(myJsonString);

/**
 * Datan skickas till en server.
 */

const myNewObject = JSON.parse(myJsonString);

console.log(myNewObject);
