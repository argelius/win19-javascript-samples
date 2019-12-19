function f() {
  return this.value;
}

console.log("f", f());

const g = f.bind({ value: "test" });

console.log("g", g());
