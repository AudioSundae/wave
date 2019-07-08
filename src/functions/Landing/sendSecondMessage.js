export function sendSecondMessage() {
  let { messages } = this.state;
  messages.push({
    "from": "dexter",
    "content": "What is your name?"
  })
  this.setState({
    typing: false
  }, this.setState({ messages, prompting: {
    "type": "two_line",
    "prompt": ["Your first name", "Your last name"],
    "promptId": "14SFG304Q9"
  }}))
}
