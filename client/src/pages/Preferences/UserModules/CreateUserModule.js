import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';


export const CreateUserModule = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Добавление модуля"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => onCancel()}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onCreate(values);
            form.resetFields();
            
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
            label="Наименование модуля"
            name="name"
            
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input placeholder="OpenFOAMHelmholtz" />
        </Form.Item>

        <Form.Item
            label="Github Gist репозиторий (url)"
            name="url"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input placeholder="https://gist.github.com/dealenx/17d9523dc3d10df57689f147bd4411d8" />
        </Form.Item>
      </Form>
    </Modal>
  );
};


export default CreateUserModule