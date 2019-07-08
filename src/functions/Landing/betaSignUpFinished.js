export function betaSignUpFinished() {
  let { messages } = this.state;
  messages.push({
    "from": "dexter",
    "content": `I can't wait to be friends.`
  })
  this.setState({
    messages,
    typing: false,
  }, () => {
    setTimeout(() => this.setState({typing: true}, () => {
      messages.push({
        "from": "dexter",
        "content": `Keep a close eye on your inbox. I'll send you an email when I'm ready to go!`
      })
      setTimeout(() => this.setState({typing: false, messages}), 2500)
    }), 1000)
  })
}
