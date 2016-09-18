var React = require('react')
var ReactDOM = require('react-dom')

// Top level
var Page = React.createClass({
  render: function () {
    // Styles
    const parentcss = {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vr",
      // justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
      // justifyContent: ["center"],
      alignItems: "center",
      // alignItems: ["flex-start","flex-end","center","stretch","baseline"],
      // flexWrap: ["nowrap","wrap","wrap-reverse"],
      // alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
    };

    const boxcss = {
      // alignSelf: ["flex-end"],
      border: "1px",
      borderColor: "black",
      borderStyle: "solid",
      height: "40vh",
      width: "70%",
      // alignSelf: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
      // flexGrow: _.range(0,6),
      // order: _.range(-10,11)
    };
    return (
      <div style={parentcss}>
        <FirstBox style={boxcss} />
        <SecondBox style={boxcss} />
      </div>
    );
  }
});
// Nested two boxes
var FirstBox = React.createClass({
  render: function () {
    return (
      <div style={this.props.style}>
        I am first box.
      </div>
    );
  }
});
var SecondBox = React.createClass({
  render: function () {
    var addAdhereToBottom = this.props.style
    addAdhereToBottom["margin"] = "auto"
    return (
      <div style={addAdhereToBottom}>
        I am second box.
      </div>
    );
  }
});



ReactDOM.render(
  <Page />,
  document.getElementById('container')
);