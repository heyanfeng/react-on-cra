import React from "react";
import { connect } from "react-redux";
import {
  asycGetUserInfo,
  updateDataSource,
  asycPutDataSource,
  setCurrentItem,
  asycDelDataSource
} from "../store/actions";
import DataTable from "../components/dataTable";

@connect(
  state => {
    return {
      userItems: state.example01Model.userItems,
      currentItem: state.example01Model.currentItem
    };
  },
  {
    asycGetUserInfo,
    updateDataSource,
    asycPutDataSource,
    setCurrentItem,
    asycDelDataSource
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
