import React from 'react'
import { connect } from 'react-redux'
import { asycGetUserInfo } from '../store/actions'
import DataTable from '../components/dataTable'

@connect(
  (state) => {
    return {
      userItems: state.example01Model.userItems
    }
  },
  { asycGetUserInfo }
)
class TableService extends React.Component {
  componentDidMount() {
    this.props.asycGetUserInfo()
  }
  render() {
    return <DataTable {...this.props} />
  }
}

export default TableService
