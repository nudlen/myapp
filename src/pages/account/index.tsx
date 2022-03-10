import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
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
        <ProTable columns={columns} toolBarRender={false} dataSource={mockData} />
      </Card>
    </PageContainer>
  );
};

export default Account;
