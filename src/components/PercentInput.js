import React, { Component } from 'react'
import numeral from 'numeral'

export default class PercentInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: false,
      inputValue: props.inputValue
    }
  }

  toggleInputFocus = toggleState => {
    this.setState({
      focused: toggleState
    })
  }

  onBlur = () => {
    this.toggleInputFocus(false)
    this.props.onUpdate(this.state.inputValue)
  }

  onFocus = () => {
    this.toggleInputFocus(true)
  }

  handleFormChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    return (
      <input
        step="0.01"
        type={this.state.focused ? 'number' : 'text'}
        name={this.props.name}
        min="0"
        value={!this.state.focused ? numeral(this.state.inputValue).format('0,0.00%') : this.state.inputValue}
        onChange={this.handleFormChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    )
  }
}
