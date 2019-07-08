import React from 'react';
let cn = require('classnames')
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputOne: "",
      inputTwo: ""
    }
  }
  changeInputOne = event => this.setState({inputOne: event.target.value})
  changeInputTwo = event => this.setState({inputTwo: event.target.value})
  onSubmit = event => {
    let { inputOne, inputTwo } = this.state;
    event.preventDefault()
    let value = this.props.type === "two_line"
      ? [inputOne, inputTwo]
      : this.props.type === "one_line"
        ? [inputOne]
        : []
    this.props.submitPromptFields({
      "value": value,
      "promptId": this.props.promptId
    })
    document.getElementById('prompt_form').reset()
    this.setState({inputOne: "", inputTwo: ""})
  }
  render() {
    return(
      <form id="prompt_form" onSubmit={this.onSubmit} className={cn(["landing-prompt", "col-fs-fe", this.props.className])}>
        <div className="prompt">
          {
            this.props.type === "two_line"
            ? <div className="col two_line">
                <input
                  required
                  id="landing_prompt_input_one"
                  placeholder={this.props.prompt[0]}
                  onChange={this.changeInputOne}
                />
                <input
                  required
                  id="landing_prompt_input_two"
                  placeholder={this.props.prompt[1]}
                  onChange={this.changeInputTwo}
                />
              </div>
            : this.props.type === "one_line"
              ? <div className="col one_line">
                  <input
                    required
                    id="landing_prompt_input_one"
                    placeholder={this.props.prompt[0]}
                    onChange={this.changeInputOne}
                  />
                </div>
              : <div />
          }
        </div>
        <button type="submit" className={cn(["submit", {
          "show": this.props.type === "two_line"
            ? !!this.state.inputOne && !!this.state.inputTwo
            : this.props.type === "one_line"
              ? !!this.state.inputOne
              : false
        }])}>
          Send
        </button>
      </form>
    )
  }
}
