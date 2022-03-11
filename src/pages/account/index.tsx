import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Space, Button, Modal } from 'antd';
import type { ProColumns } from '@ant-design/pro-table/lib/typing';
import ProTable from '@ant-design/pro-table';

export type TableListItem = {
  userName: string;
  password: string;
  permission: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '密码',
    dataIndex: 'password',
  },
  {
    title: '权限',
    dataIndex: 'permission',
  },
  {
    title: '操作',
    valueType: 'option',
    fixed: 'right',
    render: () => {
      return (
        <Space>
          <a>编辑</a>
          <a
            onClick={() => {
              Modal.confirm({
                title: '确认',
                content: '是否确定删除',
              });
            }}
          >
            删除
          </a>
        </Space>
      );
    },
  },
];
const mockData = [
  { userName: 'aaaa', password: '12345687', permission: 'admin' },
  { userName: 'aaaa', password: '12345687', permission: 'admin' },
  { userName: 'aaaa', password: '12345687', permission: 'admin' },
];
const Account: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <ProTable
          columns={columns}
          toolBarRender={() => {
            return [
              <Space key="1">
                <Button type="primary" style={{ left: 0 }}>
                  新建
                </Button>
              </Space>,
            ];
          }}
          dataSource={mockData}
        />
      </Card>
    </PageContainer>
  );
};

export default Account;
