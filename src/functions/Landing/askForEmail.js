export function askForEmail() {
  let { messages } = this.state;
  messages.push({
    "from": "dexter",
    "content": `To be one of my first human friends, I need to know where to reach you.`
  })
  this.setState({ messages,
    typing: false,
    prompting: {
      "type": "one_line",
      "prompt": ["Your email address"],
      "promptId": "12HT4IOTBQ"
  }})
}
