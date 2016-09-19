import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'

// Top level
var Page = React.createClass({
  // first box is always read only, second box is read only in step 2, writable in step 1
  getDefaultProps: function () {
    // Pass down CSS
    const parentcss = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vr',
      alignItems: 'center'
    }
    const boxcss1 = {
      border: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      height: '40vh',
      width: '70%'
    }
    const boxcss2 = boxcss1
    boxcss2['margin'] = 'auto'
    boxcss2['resize'] = 'none'

    return {
      parentcss: parentcss,
      boxcss1: boxcss1,
      boxcss2: boxcss2,
      step: 1
    }
  },

  getInitialState: function () {
    // Set story for first box and null for second box
    return {
      story1: "Loading...",
      story2: "Loading..."
    }
  },

  componentWillMount: function () {
    fetch('/randomPost')
      .then(response => response.json())
      .then(response => {
        // Set state and property
        this.setState(
          {
            story1: response.story,
            story2: "How would you continue the above?"
          }
        )
      })
  },

  render: function () {
    // Styles
    console.log(this.state.story1)
    console.log(this.state.story2)
    return (
      <div style={this.props.parentcss}>
        <FirstBox style={this.props.boxcss1} story={this.state.story1} />
        <SecondBox style={this.props.boxcss2} story={this.state.story2} step={this.props.step} />
      </div>
    )
  }
})
// Nested two boxes
var FirstBox = React.createClass({
  render: function () {
    return (
      <div style={this.props.style}>
        <p>
          {this.props.story}
        </p>
      </div>
    )
  }
})
var SecondBox = React.createClass({
  render: function () {
    var box
    // Step check:
    // If step 1, then have a textarea with the story displayed as placeholder
    if (this.props.step == 1) {
      box = <textarea placeholder={this.props.story} style={this.props.style}></textarea>
    }
    else {
      box = <div style={this.props.style}><p>{this.props.story}</p></div>
    }
    return (
      box
    )
  }
})

ReactDOM.render(
  <Page />,
  document.getElementById('container')
)
