function display(content) {
  if (content === null || content === undefined) {
    return 'no message'
  } else {
    return 'your message is ' + content
  }
}

// ตัวอย่าง
// console.log(display('hello world!')); // "your message is hello world!"
// console.log(display('123')); // "your message is 123"
// console.log(display(null)); // "no message"
// console.log(display(undefined)); // "no message"

module.exports = display


// # test-demo
// writing the function _display(content)_ to return a concatenated message using the 'your message is ' string and the content parameter."

// # Output
// - display('hello world!') -> your message is hello world!
// - display('123') -> your message is 123
// - display(null) -> no message
// - display(undefined) ->no message
