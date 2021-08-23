import React from "react";
import styles from "./FileInput.module.scss";
import plusIcon from "../../images/plus.svg";
import closeFileIcon from "../../images/file-name-rm.svg";
import paperClipIcon from "../../images/clip.svg";

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

  componentDidUpdate(prevProps) {
    if (this.props.formSent === false && prevProps.formSent === true) {
      this.setState((prevState, currProps) => {
        return { fileUploaded: false, fileName: "" };
      });
    }
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
        <div className={styles["btn-box"]}>
          <img src={plusIcon} alt="Плюс" />
          <p className={styles["btn-text"]}>Загрузить резюме</p>
        </div>
        <input
          className={styles["file-input"]}
          onChange={this.handleChange}
          ref={this.fileInp}
          type="file"
        ></input>
      </label>
    );

    const uploadedFileName = (
      <div className={styles["file-name-box"]}>
        <div className={styles["wrapper"]}>
          <img
            className={styles["file-clip"]}
            src={paperClipIcon}
            alt="скрепка"
          />
          <p className={styles["file-name"]}>{this.state.fileName}</p>
          <img
            onClick={() =>
              this.setState((prevState, currProps) => {
                return { fileUploaded: false, fileName: "" };
              })
            }
            src={closeFileIcon}
            alt="Удалить файл"
          />
        </div>
      </div>
    );

    return this.state.fileUploaded ? uploadedFileName : btnToLoad;
  }
}

export default FileInput;
