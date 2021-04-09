/**
 * Class for handling notifications on the frontend.
 */
export class NotificationHandler {
  /**
   * Constructor of the NotificationHandler class.
   * Adds a notification container to the end of the body.
   */
  constructor() {
    // Create new notification container
    const containerExists =
      document.querySelectorAll(".notifications").length != 0;
    if (!containerExists) {
      const container = document.createElement("div");
      const content = document.createElement("p");
      container.classList.add("notifications");
      content.classList.add("notification");

      container.appendChild(content);
      document.body.appendChild(container);
    }

    this.notificationContainer = document.querySelector(".notifications");
    this.notificationContent = document.querySelector(".notification");
    this.deletionTimeout = null;
  }

  /**
   * Displays some message as notification on the frontend.
   *
   * @param {string} type class to add to the notification
   * @param {string} message text to display
   */
  addNotification(type, message) {
    // Prevent previous deletion from executing
    clearTimeout(this.deletionTimeout);

    if (!this.notificationContent.classList.contains(type)) {
      this.notificationContent.classList = "notification";
      this.notificationContent.classList.add(type);
    }

    this.notificationContent.innerHTML = message;
    this.notificationContainer.classList.add("visible");

    // Schedule deletion
    this.deletionTimeout = setTimeout(() => {
      this.notificationContainer.classList.remove("visible");
    }, 1400);
  }
}
