var React = require('react')
var ReactDOM = require('react-dom')

// Top level
var Page = React.createClass({
  render: function () {
    // Styles
    const parentcss = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vr',
      alignItems: 'center'
    }
    const boxcss = {
      border: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      height: '40vh',
      width: '70%'
    }
    return (
      <div style={parentcss}>
        <FirstBox style={boxcss} />
        <SecondBox style={boxcss} />
      </div>
    )
  }
})
// Nested two boxes
var FirstBox = React.createClass({
  render: function () {
    return (
      <div style={this.props.style}>
        I am first box.
      </div>
    )
  }
})
var SecondBox = React.createClass({
  render: function () {
    var addAdhereToBottom = this.props.style
    addAdhereToBottom['margin'] = 'auto'
    return (
      <div style={addAdhereToBottom}>
        I am second box.
      </div>
    )
  }
})

ReactDOM.render(
  <Page />,
  document.getElementById('container')
)
