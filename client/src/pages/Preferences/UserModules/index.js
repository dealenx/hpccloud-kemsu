import React from 'react';
import PropTypes from 'prop-types';

import { Result, Table, Popconfirm, Button } from 'antd';
import { DeleteOutlined, PlusOutlined, LinkOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';

import style from 'HPCCloudStyle/PageWithMenu.mcss';

import Toolbar from '../../../panels/Toolbar';

import client from '../../../network';

import CreateUserModule from './CreateUserModule';

import { breadcrumb } from '..';

class UserModules extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userModuleList: [],
      isModalVisible: false,
    };
  }

  async componentDidMount() {
    await this.fetchUserModuleList();
  }

  async onCreate(values) {
    await client.createUserModule(values);
    await this.fetchUserModuleList();
    this.onCancel();
  }

  async onCancel() {
    this.setState({ ...this.state, isModalVisible: false });
  }

  getTableColumns() {
    return [
      {
        title: 'Наименование модуля',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <b>{text}</b>,
      },
      {
        title: 'Github Gist репозиторий (url)',
        dataIndex: 'url',
        key: 'url',
        render: (text) => (
          <Button
            type="link"
            href={text}
            icon={<LinkOutlined />}
            target="__blank"
          >
            {' '}
            {text}
          </Button>
        ),
      },
      {
        title: '',
        key: 'action',
        render: (text, record) => {
          return (
            <Popconfirm
              title="Вы точно хотите удалить модуль?"
              onConfirm={() => {
                this.deleteUserModule(record._id);
              }}
              onCancel={() => {}}
              okText="Да"
              cancelText="Нет"
            >
              <Button
                // onClick={() => {
                //   this.deleteUserModule(record._id);
                // }}
                type="primary"
                icon={<DeleteOutlined />}
                danger
              />
            </Popconfirm>
          );
        },
      },
    ];
  }

  async deleteUserModule(id) {
    await client.deleteUserModule(id);
    await this.fetchUserModuleList();
  }

  async showModal() {
    this.setState({ ...this.state, isModalVisible: true });
  }

  async fetchUserModuleList() {
    const response = await client.listUserModules();
    this.setState({ ...this.state, userModuleList: response.data });
    console.log('userModuleList', this.state.userModuleList);
  }

  render() {
    const userBreadCrumb = breadcrumb(this.props.user, 'UserModules');
    return (
      <div className={style.rootContainer}>
        <Toolbar title="UserModules" breadcrumb={userBreadCrumb} hasTabs />
        <CreateUserModule
          visible={this.state.isModalVisible}
          onCancel={() => this.onCancel()}
          onCreate={(values) => this.onCreate(values)}
        />

        <div
          style={{
            padding: '16px',
          }}
        >
          {this.state.userModuleList.length !== 0 ? (
            <div>
              <Table
                rowKey="_id"
                columns={this.getTableColumns()}
                dataSource={this.state.userModuleList}
                bordered
              />
              <div
                style={{
                  marginTop: '-50px',
                }}
              >
                <Button
                  onClick={() => this.showModal()}
                  icon={<PlusOutlined />}
                  type="primary"
                >
                  Добавить модуль
                </Button>
              </div>
            </div>
          ) : (
            <Result
              title="Модули еще не добавлены"
              extra={
                <Button
                  onClick={() => this.showModal()}
                  icon={<PlusOutlined />}
                  type="primary"
                >
                  Добавить модуль
                </Button>
              }
            />
          )}
        </div>
      </div>
    );
  }
}

UserModules.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
};

export default connect(
  (state) => ({
    user: state.auth.user,
  }),
  () => ({})
)(UserModules);
