export const helperFunctions = {
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
  },
};
