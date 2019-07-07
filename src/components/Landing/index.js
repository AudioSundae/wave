import React from 'react';
import Message from './components/message';
import Prompt from './components/prompt';
import mountain from '../../img/mountain.jpg';
import logo from '../../img/icons/logo.svg';
import { sendFirstMessage, sendSecondMessage } from '../../functions/Landing';
let cn = require('classnames')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      prompting: false,
      currentSubmission: false
    }
    this.sendFirstMessage = sendFirstMessage.bind(this)
    this.sendSecondMessage = sendSecondMessage.bind(this)
  }
  componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('list_user')) || false,
        messages = [];
    if (currentUser.name) {
      messages = [{
        "from": "dexter",
        "content": `Welcome back, ${currentUser.name[0]}.`
      }]
      this.setState({messages})
    } else {
      this.sendFirstMessage()
      .then(messages => setTimeout(messages => this.sendSecondMessage(messages), 1000))
    }
  }






  componentDidUpdate(prevProps, prevState, snapshot) {
    let { currentSubmission, messages } = this.state;
    if (prevState.currentSubmission !== currentSubmission) {
      messages.push({
        "from": "user",
        "content": currentSubmission
      })
      this.setState({messages, prompting: {
        "type": "one_line",
        "prompt": ["Type your message"]
      },})
    }
  }
  submitPromptFields(promptAnswer) {
    localStorage.setItem('list_user', JSON.stringify({name: promptAnswer}));
    this.setState({currentSubmission: promptAnswer.join(" "), prompting: false})
  }
  render() {
    let listUser = JSON.parse(localStorage.getItem('list_user')),
        { messages, prompting } = this.state;
    return(
      <div className="landing row">
        <img className="logo" src={logo} alt="Dexter" />
        <img className="background" src={mountain} alt="mountains" />
        <div className="flex">
          {
            messages.map((m, index) =>
              <Message
                showImg={
                  index > 0
                    ? messages[index - 1].from === m.from
                      ? false
                      : true
                    : true
                }
                from={m.from}
                content={m.content}
                key={index}
              />
            )
          }
          <Prompt
            className={cn({"active": !!prompting})}
            type={prompting.type || ""}
            prompt={prompting.prompt || ""}
            submitPromptFields={this.submitPromptFields.bind(this) || null}
          />
        </div>
      </div>
    )
  }
}
