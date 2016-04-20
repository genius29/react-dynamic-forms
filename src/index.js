import React, { Component } from 'react'

class DynamicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.validateForm()) {
      const formData = {}
      this.props.inputs.map(i => formData[i.name] = this.refs[i.name].value)
      this.props.callBack(formData)
      this.props.inputs.map(i => this.refs[i.name].value = '')
      this.setState({errors: []})
    }
  }
  validateForm() {
    const responses = []
    this.props.inputs.map((i) => responses.push([i.name, this.refs[i.name].value]))
    const invalidFields = responses.filter(r => { return r[1] === '' })
    return invalidFields.length > 0 ? this.setError(invalidFields) : true
  }
  setError(invalidFields) {
    this.setState({errors: invalidFields.map(f => f[0])})
    return false
  }
  render() {
    const { inputs } = this.props
    const { errors } = this.state
    const fields = inputs.map((input, idx) => {
      const inputClasses = errors.filter(e => e === input.name).length ? "form-group has-error" : "form-group"
      return <div className={inputClasses}  key={idx}>
        <label className="control-label">{input.name}</label>
        <input className="form-control" name={input.name} ref={input.name} type={input.type}/>
      </div>
    })
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        { fields }
        <div className="form-group">
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
        <div className="alert alert-danger" style={{display: errors.length > 0 ? 'block' : 'none'}} role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span className="sr-only">Error:</span>
          &nbsp; Fields are missing
        </div>
      </form>
    )
  }
}

export default DynamicForm
