import React from 'react'
import ReactDOM from 'react-dom'
import DynamicForm from './components/DynamicForm'

const inputs = [{
  name: 'name',
  type: 'text'
},
{
  name: 'email',
  type: 'email'
}
]

function callBack(formData) {
  console.log(formData)
}

ReactDOM.render(<DynamicForm inputs={inputs} callBack={callBack}/>, document.getElementById('app'))
