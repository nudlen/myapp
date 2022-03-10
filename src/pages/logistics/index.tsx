import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

export type TableListItem = {
  wagonNum: string;
  place: string;
  time: string;
  date: string;
  vanstate: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '车牌',
    dataIndex: 'wagonNum',
  },
  {
    title: '地点',
    dataIndex: 'place',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '货车状态',
    dataIndex: 'vanstate',
  },
];

const mockData = [
  { wagonNum: '粤B9LK00', place: '平湖', time: '22:07', date: '2021.10.22', vanstate: '延误' },
];

const Logistics: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <ProTable columns={columns} toolBarRender={false} dataSource={mockData} />
      </Card>
    </PageContainer>
  );
};

export default Logistics;
