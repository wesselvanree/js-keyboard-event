import { HelperFunctions } from "./helperFunctions";
import { EventHandler } from "./eventHandler";

export const helper = new HelperFunctions();
export const eventHandler = new EventHandler();

// Set event listeners
document.body.onkeyup = function (e) {
  eventHandler.updateProperties(e);
};
document.querySelector(".element1").addEventListener("click", () => {
  eventHandler.copyText("element1");
});
document.querySelector(".element2").addEventListener("click", () => {
  eventHandler.copyText("element2");
});
document.querySelector(".element3").addEventListener("click", () => {
  eventHandler.copyText("element3");
});
document.querySelector(".element4").addEventListener("click", () => {
  eventHandler.copyText("element4");
});
