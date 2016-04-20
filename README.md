# React Automatic Form

React component that generates a form from an array of fields you'd like to include.  Includes simple validation and callback to parent component passing back an object with the form data.  Only supports input tags currently.

## Usage

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit (formData){
    console.log(formData)
  }
  render() {
    const inputFields = [
      {
        name: 'name',
        type: 'text'
      },
      {
        name: 'email',
        type: 'email'
      },
      {
        name: 'color',
        type: 'text'
      }
    ]
    return (
      <AutomaticForm inputs={inputFields} callBack={this.handleSubmit.bind(this)}/>
        )
  }
}
```

## License

MIT
