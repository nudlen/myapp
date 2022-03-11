import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Space, Button, Modal } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

export type TableListItem = {
  id: string;
  money: number;
  weight: string;
  time: number;
  type: string;
  destination: string;
  origin: string;
  wagonNum: string;
  date: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    dataIndex: 'id',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '车牌',
    dataIndex: 'wagonNum',
  },
  {
    title: '出发地',
    dataIndex: 'origin',
  },
  {
    title: '目的地',
    dataIndex: 'destination',
  },
  {
    title: '货物类型',
    dataIndex: 'type',
  },
  {
    title: '次数',
    dataIndex: 'time',
  },
  {
    title: '重量',
    dataIndex: 'weight',
  },
  {
    title: '价格',
    dataIndex: 'money',
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
  {
    id: '001',
    date: '2022-02-28',
    wagonNum: '粤B78LO9',
    origin: '凤岗',
    destination: '龙岗',
    type: '棉花',
    time: 1,
    weight: '21.345T',
    money: 900,
  },
  {
    id: '002',
    date: '2022-03-03',
    wagonNum: '粤B23K98',
    origin: '凤岗',
    destination: '坪地',
    type: '汽车',
    time: 1,
    weight: '22.095T',
    money: 2000,
  },
];

const Finance: React.FC = () => {
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

export default Finance;
