const main = document.querySelector("main");
const keyCode = document.querySelector(".keyCode");
const key = document.querySelector(".key");
const code = document.querySelector(".code");
const which = document.querySelector(".which");
const eLocation = document.querySelector(".e-location");

let DarkModeCounter = 0;
document.body.onkeyup = function (e) {
  keyCode.innerHTML = e.keyCode;
  key.innerHTML = "'" + e.key + "'";
  code.innerHTML = "'" + e.code + "'";
  which.innerHTML = e.which;
  eLocation.innerHTML = e.location;
  if (e.key == 'D' && e.ctrlKey == true) {
    e.preventdefault;
    if (main.classList.contains("dark-mode")) {
      main.classList.remove("dark-mode");
    } else {
      main.classList.add("dark-mode");
    }
  }
  console.log(e);
}

// copy when clicking a element
document.querySelector(".element1").addEventListener("click", function () { copyText('element1') });
document.querySelector(".element2").addEventListener("click", function () { copyText('element2') });
document.querySelector(".element3").addEventListener("click", function () { copyText('element3') });
document.querySelector(".element4").addEventListener("click", function () { copyText('element4') });

const selectKey = document.querySelector(".select--key");
const selectCode = document.querySelector(".select--code");
const selectWhich = document.querySelector(".select--which");
const selectLocation = document.querySelector(".select--location")

function copyText(element) {

  if (element == 'element1') {
    selectKey.innerHTML = 'event.key == ' + key.innerHTML;
    copyToClipboard(selectKey.outerText);
    copyLog(selectKey.outerText);
  } if (element == 'element2') {
    selectCode.innerHTML = 'event.code == ' + code.innerHTML;
    copyToClipboard(selectCode.outerText);
    copyLog(selectCode.outerText);
  } if (element == 'element3') {
    selectWhich.innerHTML = 'event.which == ' + which.innerHTML;
    copyToClipboard(selectWhich.outerText);
    copyLog(selectWhich.outerText);
  } if (element == 'element4') {
    selectLocation.innerHTML = 'event.location == ' + eLocation.innerHTML;
    copyToClipboard(selectLocation.outerText);
    copyLog(selectLocation.outerText);
  }

}

function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function copyLog(text) {
  console.log("copied: " + text);
}
