import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInp = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    console.log(this.fileInp.current.files);
  }

  render() {
    return (
      <input
        onChange={this.handleChange}
        ref={this.fileInp}
        type="file"
      ></input>
    );
  }
}

export default FileInput;
