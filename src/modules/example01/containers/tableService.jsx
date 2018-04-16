import React from 'react';
import { connect } from 'react-redux';
import {
  asycGetUserInfo,
  updateDataSource,
  setCurrentItem,
  asycDelDataSource,
  setDialogVisible,
  setDialogTitle
} from '../store/actions';
import DataTable from '../components/dataTable';

@connect(
  (state) => {
    return {
      userItems: state.example01Model.userItems,
      currentItem: state.example01Model.currentItem
    };
  },
  {
    asycGetUserInfo,
    updateDataSource,
    setCurrentItem,
    asycDelDataSource,
    setDialogVisible,
    setDialogTitle
  }
)
class TableService extends React.Component {
  componentDidMount() {
    this.props.asycGetUserInfo();
  }
  render() {
    return <DataTable {...this.props} />;
  }
}

export default TableService;
