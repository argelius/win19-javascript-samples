function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.width * this.height;
  }

  this.setWidth = function (width) {
    this.width = width;
  }

  this.setHeight = function (height) {
    this.height = height;
  }

  this.render = function () {
    let recEl = document.querySelector("#rect");

    if (!recEl) {
      recEl = document.createElement("div");
      document.body.appendChild(recEl);
    }
    recEl.style.backgroundColor = "blue";
    recEl.style.width = this.width + "px";
    recEl.style.height = this.height + "px";

    recEl.id = "rect";
  }
}

const widthEl = document.querySelector("#width");
const heightEl = document.querySelector("#height");

const rec = new Rectangle(parseInt(widthEl.value), parseInt(heightEl.value));

widthEl.addEventListener("change", function() {
  rec.setWidth(parseInt(this.value));
  rec.render();
});

heightEl.addEventListener("change", function() {
  rec.setHeight(parseInt(this.value));
  rec.render();
});

rec.render();
