export class helperFunctions {
  constructor() {
    this.notificationContainer = document.querySelector(".notification");
    this.notificationContent = document.querySelector(".notification-content");
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
    console.log("copied: " + text);
    this.notifyFrontend("copied: " + text);
  }

  /**
   * Displays some message as notification on the frontend.
   *
   * @param {string} message text to display
   */
  notifyFrontend(message) {
    this.notificationContent.innerHTML = message;
    this.notificationContainer.classList.add("visible");

    // Schedule deletion
    setTimeout(() => {
      this.notificationContainer.classList.remove("visible");
    }, 1400);
  }
}
