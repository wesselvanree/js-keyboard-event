export class HelperFunctions {
  /**
   * Constructor of the HelperFunctions class.
   *
   * @param {NotificationHandler} notificationHandler handler to be used for notifications
   */
  constructor(notificationHandler) {
    this.notificationHandler = notificationHandler;
  }

  /**
   * Copies a certain string to clipboard.
   *
   * @param {string} text the text to copy to clipboard
   */
  copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("value", text);

    dummy.select();
    document.execCommand("copy");

    document.body.removeChild(dummy);

    this.notificationHandler.addNotification(
      "success",
      "Copied " + text + " to clipboard!"
    );
  }
}
