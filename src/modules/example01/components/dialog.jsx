import React from 'react';
import { Modal, Input } from 'antd';

const Dialog = (props, handleOk) => (
  <Modal
    title={props.title}
    visible={props.dialogVisible}
    onOk={handleOk}
    onCancel={() => {
      props.setDialogVisible(false);
    }}
  >
    <span>Name:</span>
    <Input
      value={props.name}
      onChange={(e) => {
        props.setUserName(e.target.value);
      }}
    />
    <span>Email:</span>
    <Input
      value={props.email}
      onChange={(e) => {
        props.setUserEmail(e.target.value);
      }}
    />
    <span>WebSite:</span>
    <Input
      value={props.website}
      onChange={(e) => {
        props.setUserWebSite(e.target.value);
      }}
    />
  </Modal>
);

export default Dialog;
