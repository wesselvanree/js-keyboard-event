import { helper } from "./index";

export class EventHandler {
  /**
   * Constructor of the EventHandler class.
   */
  constructor() {
    this.key = document.querySelector(".key");
    this.code = document.querySelector(".code");
    this.which = document.querySelector(".which");
    this.eLocation = document.querySelector(".e-location");
    this.largeProperty = document.querySelector(".large-property");
  }

  /**
   * Copies the corresponding property when button is clicked.
   *
   * @param {string} element name of the element to copy
   */
  copyText(element) {
    if (element == "element1") {
      helper.copyToClipboard(this.key.innerHTML);
    } else if (element == "element2") {
      helper.copyToClipboard(this.code.innerHTML);
    } else if (element == "element3") {
      helper.copyToClipboard(this.which.innerHTML);
    } else if (element == "element4") {
      helper.copyToClipboard(this.eLocation.innerHTML);
    }
  }

  updateProperties(e) {
    this.key.innerHTML = '"' + e.key + '"';
    this.code.innerHTML = '"' + e.code + '"';
    this.which.innerHTML = e.which;
    this.eLocation.innerHTML = e.location;
    if (e.code == "Space") {
      this.largeProperty.innerHTML = e.code;
    } else {
      this.largeProperty.innerHTML = e.key;
    }
  }
}
