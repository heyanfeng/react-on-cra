import React from 'react'
import { Table, Input, Popconfirm } from 'antd'
import EditableCell from './editTableCell'

class DataTable extends React.Component {
  constructor() {
    super()
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => this.renderColumns(text, record, 'name')
      },
      {
        title: 'UserName',
        dataIndex: 'username',
        key: 'username',
        render: (text) => text
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text, record) => this.renderColumns(text, record, 'email')
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: (text) => text
      },
      {
        title: 'WebSite',
        dataIndex: 'website',
        key: 'website',
        render: (text, record) => this.renderColumns(text, record, 'website')
      },
      {
        title: 'Company',
        children: [
          {
            title: 'Company Name',
            dataIndex: 'company.name',
            key: 'companyname'
          },
          {
            title: 'Catch Phrase',
            dataIndex: 'company.catchPhrase',
            key: 'catchPhrase'
          },
          {
            title: 'B S',
            dataIndex: 'company.bs',
            key: 'bs'
          }
        ]
      },
      {
        title: 'Address',
        children: [
          {
            title: 'City',
            dataIndex: 'address.city',
            key: 'city'
          },
          {
            title: 'Street',
            dataIndex: 'address.street',
            key: 'street'
          },
          {
            title: 'Suite',
            dataIndex: 'address.suite',
            key: 'suite'
          },
          {
            title: 'Zipcode',
            dataIndex: 'address.zipcode',
            key: 'zipcode'
          },
          {
            title: 'Geo',
            children: [
              {
                title: 'Lat',
                dataIndex: 'address.geo.lat',
                key: 'lat'
              },
              {
                title: 'Lng',
                dataIndex: 'address.geo.lng',
                key: 'lng'
              }
            ]
          }
        ]
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editable } = record
          return (
            <div className="editable-row-operations">
              {editable ? (
                <span>
                  <a onClick={() => this.save(record.key)}>Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.id)}>Edit</a>
              )}
            </div>
          )
        }
      }
    ]
  }

  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={(value) => this.handleChange(value, record.id, column)}
      />
    )
  }

  handleChange(value, id, column) {
    const newData = [ ...this.state.data ]
    const target = newData.filter((item) => id === item.id)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }

  edit(id) {
    const newData = [ ...this.props.userItems ]
    const target = newData.filter((item) => id === item.id)[0]
    if (target) {
      target.editable = true
    }
  }
  render() {
    const { userItems } = this.props
    return <Table columns={this.columns} dataSource={userItems} rowKey="id" bordered size="small" />
  }
}

export default DataTable
