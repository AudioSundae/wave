export function sendSecondMessage() {
  let { messages } = this.state;
  messages.push({
    "from": "dexter",
    "content": "First things first, what should I call you?"
  })
  this.setState({messages, prompting: {
    "type": "two_line",
    "prompt": ["Your first name", "Your last name"]
  }})
}
