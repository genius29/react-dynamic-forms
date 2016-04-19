import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

//Landing Page Junk Stuff
export default class DynamicForm extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const formData = {}
    this.props.inputs.map((input) => {
      formData[input.name] = this.refs[input.name].value
      this.refs[input.name].value = ''
    })
    this.props.callBack(formData)
  }
  render() {
    const { inputs } = this.props
    const fields = inputs.map((input, idx) => {
      return <div className="form-group"  key={idx}>
        <label>{input.name}</label>
        <input className="form-control" name={input.name} ref={input.name} type={input.type}/>
      </div>
    })
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        { fields }
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    )
  }
}
