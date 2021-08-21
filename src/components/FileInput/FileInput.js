import React from "react";
import styles from "./FileInput.module.scss";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInp = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fileUploaded: false,
      fileName: "",
    };
  }

  componentDidUpdate() {
    if (this.props.formSent)
      this.setState({ fileUploaded: false, fileName: "" });
  }

  handleChange(evt) {
    if (this.fileInp.current.files.length > 0) {
      this.setState({
        fileUploaded: true,
        fileName: this.fileInp.current.files[0].name,
      });
    }
  }

  render() {
    const btnToLoad = (
      <label className={styles["btn"]}>
        <p className={styles["btn-text"]}>{this.props.loadMsg}</p>
        <input
          className={styles["file-input"]}
          onChange={this.handleChange}
          ref={this.fileInp}
          type="file"
        ></input>
      </label>
    );

    const uploadedFileName = <p>{this.state.fileName}</p>;

    return this.state.fileUploaded ? uploadedFileName : btnToLoad;
  }
}

export default FileInput;
