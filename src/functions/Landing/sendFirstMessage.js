export async function sendFirstMessage() {
  let messages = [{
    "from": "dexter",
    "content": "Hi there! I’m Rolo, your friendly robot Rolodex."
  }]
  await this.setState({messages})
  return messages
}
