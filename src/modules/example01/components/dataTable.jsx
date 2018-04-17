import React from "react";
import { Table, Popconfirm, Button } from "antd";
import DialogService from "../containers/dialogService";
import "../polyfill/css/dataTable.css";

class DataTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        fixed: "left",
        render: text => <a>{text}</a>
      },
      {
        title: "UserName",
        dataIndex: "username",
        key: "username",
        render: text => text
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: text => <a>{text}</a>
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        render: text => text
      },
      {
        title: "WebSite",
        dataIndex: "website",
        key: "website",
        render: text => <a href={`http://${text}`}>{text}</a>
      },
      {
        title: "Company",
        children: [
          {
            title: "Company Name",
            dataIndex: "company.name",
            key: "companyname"
          },
          {
            title: "Catch Phrase",
            dataIndex: "company.catchPhrase",
            key: "catchPhrase"
          },
          {
            title: "B S",
            dataIndex: "company.bs",
            key: "bs"
          }
        ]
      },
      {
        title: "Address",
        children: [
          {
            title: "City",
            dataIndex: "address.city",
            key: "city"
          },
          {
            title: "Street",
            dataIndex: "address.street",
            key: "street"
          },
          {
            title: "Suite",
            dataIndex: "address.suite",
            key: "suite"
          },
          {
            title: "Zipcode",
            dataIndex: "address.zipcode",
            key: "zipcode"
          },
          {
            title: "Geo",
            children: [
              {
                title: "Lat",
                dataIndex: "address.geo.lat",
                key: "lat"
              },
              {
                title: "Lng",
                dataIndex: "address.geo.lng",
                key: "lng"
              }
            ]
          }
        ]
      },
      {
        title: "Operation",
        dataIndex: "operation",
        fixed: "right",
        render: (text, record) => {
          return (
            <div className="editable-row-operations">
              <a
                className="row-operations-edit"
                onClick={() => this.edit(record.id)}
              >
                Edit
              </a>
              {this.props.userItems.length && (
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => this.onDelete(record.id)}
                >
                  <a>Delete</a>
                </Popconfirm>
              )}
            </div>
          );
        }
      }
    ];
  }

  edit(id) {
    const newData = [...this.props.userItems];
    const target = newData.filter(item => id === item.id)[0];
    if (target) {
      this.props.setDialogTitle("Edit User");
      this.props.setCurrentItem(target);
      this.props.setDialogVisible(true);
    }
  }

  onDelete(id) {
    const newData = [...this.props.userItems];
    this.props.updateDataSource(newData.filter(item => item.id !== id));
    this.props.asycDelDataSource(id);
  }

  openCreateUserDialog() {
    this.props.setDialogTitle("Create User");
    this.props.setDialogVisible(true);
    this.props.setCurrentItem({});
  }

  render() {
    const { userItems } = this.props;
    return (
      <React.Fragment>
        <Button
          type="primary"
          className="table-add-button"
          onClick={() => {
            this.openCreateUserDialog();
          }}
        >
          Create User
        </Button>
        <Table
          columns={this.columns}
          dataSource={userItems}
          rowKey="id"
          bordered
          scroll={{ x: 2300 }}
        />
        <DialogService />
      </React.Fragment>
    );
  }
}

export default DataTable;
