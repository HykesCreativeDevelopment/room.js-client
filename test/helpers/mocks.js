const win = {}

const doc = {
  scrollingElement: {
    scrollTop: 0,
    scrollHeight: 0
  }
}

const socket = {
  on: (msg, fn) => {}
}

const io = {
  connect: () => socket
}

const CodeMirror = {}

module.exports = { win, doc, io, CodeMirror }
