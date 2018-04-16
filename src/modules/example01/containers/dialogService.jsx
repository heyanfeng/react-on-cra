import React from 'react';
import { connect } from 'react-redux';
import {
  setDialogVisible,
  setUserName,
  setUserEmail,
  setUserWebSite,
  asycPutDataSource,
  updateDataSource,
  asycPostDataSource
} from '../store/actions';
import { notification } from 'antd';
import Dialog from '../components/dialog';

@connect(
  (state) => {
    return {
      title: state.example01Model.title,
      name: state.example01Model.name,
      email: state.example01Model.email,
      website: state.example01Model.website,
      userItems: state.example01Model.userItems,
      currentItem: state.example01Model.currentItem,
      dialogVisible: state.example01Model.dialogVisible
    };
  },
  {
    setDialogVisible,
    setUserName,
    setUserEmail,
    setUserWebSite,
    asycPutDataSource,
    updateDataSource,
    asycPostDataSource
  }
)
class DialogService extends React.Component {
  render() {
    const handleOk = () => {
      const { name, email, website } = this.props;
      if (name && email && website) {
        if (Object.keys(this.props.currentItem).length) {
          const newData = [ ...this.props.userItems ];
          let target = newData.filter((item) => this.props.currentItem.id === item.id)[0];
          target.name = name;
          target.email = email;
          target.website = website;
          this.props.asycPutDataSource(target.id, target);
          this.props.updateDataSource(newData);
          this.props.setDialogVisible(false);
        } else {
          this.props.asycPostDataSource({ name, email, website });
          this.props.setDialogVisible(false);
        }
      } else {
        notification.error({
          message: '必填项不能为空'
        });
      }
    };
    return Dialog(this.props, handleOk);
  }
}

export default DialogService;
