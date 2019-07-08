import React from 'react';
import Message from './components/message';
import Prompt from './components/prompt';
import Typing from './components/typing';
import mountain from '../../img/mountain.jpg';
import logo from '../../img/icons/logo.svg';
import { sendFirstMessage, sendSecondMessage, askForEmail, niceToMeetYou, betaSignUpFinished } from '../../functions/Landing';
let cn = require('classnames')

// prompting: {
//   "type": "one_line",
//   "prompt": ["Type your message"]
// }

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
    this.niceToMeetYou = niceToMeetYou.bind(this)
    this.askForEmail = askForEmail.bind(this)
    this.betaSignUpFinished = betaSignUpFinished.bind(this)
  }
  componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('list_user')) || false,
        messages = [];
    if (currentUser.name) {
      messages = [{
        "from": "dexter",
        "content": `Welcome back, ${currentUser.name[0]}.`
      }]
      this.setState({messages}, () => {
        if (!!currentUser.email === false) {
          setTimeout(() => this.setState({typing: true}), 500)
          setTimeout(() => this.askForEmail(), 3000)
        } else {
          setTimeout(() => this.setState({typing: true}), 500)
          setTimeout(() => this.betaSignUpFinished(), 1500)
        }
      })
    } else {
      this.sendFirstMessage()
      .then(setTimeout(() => this.setState({typing: true}), 500))
      .then(messages => setTimeout(() => this.sendSecondMessage(), 1500))
      // .then(() => console.log(this.state.currentSubmission))
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let { currentSubmission, messages, prompting } = this.state;
    if (prevState.currentSubmission !== currentSubmission) {
      messages.push({
        "from": "user",
        "content": currentSubmission.value.join(' '),
        "promptId": currentSubmission.promptId
      })
      this.setState({messages},
        () => setTimeout(() => this.setState({typing: true}), 1000)
      )
      // get email
      if (currentSubmission.promptId === "14SFG304Q9") {
        setTimeout(() => this.niceToMeetYou(), 2000)
        setTimeout(() => this.setState({typing: true}), 3000)
        setTimeout(() => this.askForEmail(), 5000)
      }
      if (currentSubmission.promptId === "12HT4IOTBQ") {
        setTimeout(() => this.setState({typing: true}), 500)
        setTimeout(() => this.betaSignUpFinished(), 1500)
      }
    }
  }
  submitPromptFields(promptAnswer) {
    let currentUser = JSON.parse(localStorage.getItem('list_user')) || {}
    if (promptAnswer.promptId === "14SFG304Q9") {
      currentUser.name = promptAnswer.value
    } else if (promptAnswer.promptId === "12HT4IOTBQ") {
      currentUser.email = promptAnswer.value
    }
    localStorage.setItem('list_user', JSON.stringify({
      name: currentUser.name || null,
      email: currentUser.email || null
    }))
    this.setState({
      currentSubmission: promptAnswer,
      prompting: false
    })
    console.log(JSON.parse(localStorage.getItem('list_user')))
  }
  render() {
    let { messages, prompting } = this.state;
    return(
      <div className="landing row">
        <img className="logo" src={logo} alt="Dexter" />
        <img className="background" src={mountain} alt="mountains" />
        <img className="background two" src={mountain} alt="mountains" />
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
          <Typing
            className={cn({
              "show": this.state.typing
            })}
          />
          <Prompt
            className={cn({"active": !!prompting})}
            type={prompting.type || ""}
            prompt={prompting.prompt || ""}
            promptId={prompting.promptId || ""}
            submitPromptFields={this.submitPromptFields.bind(this) || null}
          />
        </div>
      </div>
    )
  }
}
