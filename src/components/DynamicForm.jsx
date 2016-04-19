import React, { Component } from 'react'

//Landing Page Junk Stuff
export default class DynamicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const formData = {}
    const responses = []
    this.props.inputs.map((input) => {
      formData[input.name] = this.refs[input.name].value
      responses.push(this.refs[input.name].value)
      this.refs[input.name].value = ''
    })
    if (this.validateForm(responses)) {
      this.setState({ error: false })
      this.props.callBack(formData)
    } else {
      this.setState({ error: true })
    }
  }
  validateForm(responses) {
    return responses.filter(i => i === '').length === 0
  }
  render() {
    const { inputs } = this.props
    const { error } = this.state
    const fields = inputs.map((input, idx) => {
      return <div className="form-group"  key={idx}>
        <label>{input.name}</label>
        <input className="form-control" name={input.name} ref={input.name} type={input.type}/>
      </div>
    })
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        { fields }
        <div className="form-group">
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
        <div className="alert alert-danger" style={{display: error ? 'block' : 'none'}} role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span className="sr-only">Error:</span>
          &nbsp; Fields are missing
        </div>
      </form>
    )
  }
}
