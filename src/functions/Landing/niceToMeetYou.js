export function niceToMeetYou() {
  let { messages } = this.state,
      currentUser = JSON.parse(localStorage.getItem('list_user')) || false
  messages.push({
    "from": "dexter",
    "content": `It's nice to meet you, ${currentUser.name[0]}.`
  })
  this.setState({ messages, typing: false})
}
