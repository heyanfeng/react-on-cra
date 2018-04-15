import React from "react";
import { Modal, Input } from "antd";

class Dialog extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={true}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          <span>Name:</span>
          <Input />
          <span>Email:</span>
          <Input />
          <span>Website:</span>
          <Input />
        </Modal>
      </div>
    );
  }
}

export default Dialog;
