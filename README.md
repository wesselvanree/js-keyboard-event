# Javascript Keyup Tool

A tool for quickly getting the javascript `keyup`-event properties. This tool is meant for developers who want to for example add keyboard shortcuts to their webapp.

Visit [the webpage](https://wesselvanree.github.io/js-keyup-event/) to use this tool.

## How to Create Keyboard Shortcuts

First, you need to add a `keyup` event listener to an element or, as in this example, the document.

```js
document.onkeyup = function(event) {
  // Code ...
}
```

After that, use the available properties of the keyup event. Take a look at the console in the tool for all event properties, or visit the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).

```js
document.onkeyup = function(event) {
  const ctrl = event.ctrlKey // boolean
  const alt = event.altKey // boolean
  const shift = event.shift // boolean
  const metaKey = event.metaKey // boolean

  // Specific code for a letter
  const which = event.which // number

  // ctrl + alt + N
  if (ctrl && alt && which == 78) {
    yourCommand();
  }
}

function yourCommand() {
  // Code ...
}
```

You can find the corresponding `event.which` number with the key you want in the tool.
