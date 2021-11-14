# Javascript Keyboard event Tool

A tool for quickly getting the javascript `keydown`-event properties. This tool is meant for developers who want to for example add keyboard shortcuts to their webapp.

Visit [this webpage](https://wesselvanree.github.io/js-keydown-event/) to use this tool.

## How to Read Keyboard Shortcuts

First, you need to add a `keydown` event listener to an element or, as in this example, the document.

```js
document.onkeydown = function(event) {
  // code ...
}
```

After that, use the available properties of the keyup event. Take a look at the console in the tool for all event properties, or visit the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).

```js
document.onkeydown = (event) => {
  // boolean values
  const { crtlKey, altKey, shiftKey, metaKey } = event;
  
  // string to identify the key
  const { code } = event;

  if (metaKey && shiftKey && code == 'KeyK') {
      console.log('cmd+shift+K');
      yourCommand();
  }
}

function yourCommand() {
  // code ...
}
```

You can find the corresponding `event.code` property with the key you want in the tool.
