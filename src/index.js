import { HelperFunctions } from "./HelperFunctions";
import { EventHandler } from "./EventHandler";
import { NotificationHandler } from "./NotificationHandler";

export const eventHandler = new EventHandler();
export const notificationHandler = new NotificationHandler();
export const helper = new HelperFunctions(notificationHandler);

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
