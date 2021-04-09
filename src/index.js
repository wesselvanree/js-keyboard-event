import { helperFunctions } from "./helperFunctions";

const main = document.querySelector("main");
const largeProperty = document.querySelector(".large-property");
const key = document.querySelector(".key");
const code = document.querySelector(".code");
const which = document.querySelector(".which");
const eLocation = document.querySelector(".e-location");

const helper = new helperFunctions();

document.body.onkeyup = function (e) {
  key.innerHTML = '"' + e.key + '"';
  code.innerHTML = '"' + e.code + '"';
  which.innerHTML = e.which;
  eLocation.innerHTML = e.location;
  if (e.code == "Space") {
    largeProperty.innerHTML = e.code;
  } else {
    largeProperty.innerHTML = e.key;
  }
};

// copy when clicking an element
document.querySelector(".element1").addEventListener("click", function () {
  copyText("element1");
});
document.querySelector(".element2").addEventListener("click", function () {
  copyText("element2");
});
document.querySelector(".element3").addEventListener("click", function () {
  copyText("element3");
});
document.querySelector(".element4").addEventListener("click", function () {
  copyText("element4");
});

const selectKey = document.querySelector(".select--key");
const selectCode = document.querySelector(".select--code");
const selectWhich = document.querySelector(".select--which");
const selectLocation = document.querySelector(".select--location");

function copyText(element) {
  if (element == "element1") {
    const text = "event.key == " + key.innerHTML;
    selectKey.innerHTML = text;
    helper.copyToClipboard(key.innerHTML);
  } else if (element == "element2") {
    selectCode.innerHTML = "event.code == " + code.innerHTML;
    helper.copyToClipboard(code.innerHTML);
  } else if (element == "element3") {
    selectWhich.innerHTML = "event.which == " + which.innerHTML;
    helper.copyToClipboard(which.innerHTML);
  } else if (element == "element4") {
    selectLocation.innerHTML = "event.location == " + eLocation.innerHTML;
    helper.copyToClipboard(eLocation.innerHTML);
  }
}
