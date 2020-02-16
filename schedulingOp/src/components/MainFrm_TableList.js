import React, { Component } from 'react';
import { Card, Table } from 'antd';

const ScheduleTableContent = [
    {
        key: "1",
        scheduleName: "Scheduler1",
        dbName: "192.168.50.163:1521",
        cronExpression: "* * * * * *",
        selectedTables: "4 Tables"
    },
    {
        key: "2",
        scheduleName: "Scheduler2",
        dbName: "192.168.50.163:8080",
        cronExpression: "* * 8 * * *",
        selectedTables: "2 Tables"
    },
    {
        key: "3",
        scheduleName: "Scheduler3",
        dbName: "192.168.50.163:8081",
        cronExpression: "* */20 * * *",
        selectedTables: "5 Tables"
    },
    {
        key: "4",
        scheduleName: "Scheduler4",
        dbName: "192.168.50.163:8080",
        cronExpression: "* 2/5 * * * *",
        selectedTables: "1 Table"
    },

]

const TableColumns = [
    {
        title: 'Schedule Name',
        dataIndex: 'scheduleName',
        key: 'scheduleName',
    },
    {
        title: 'DB Name',
        dataIndex: 'dbName',
        key: 'dbName',
    },
    {
        title: 'Time To Run',
        dataIndex: 'cronExpression',
        key: 'cronExpression',
    },
    {
        title: 'ErList To Run',
        dataIndex: 'selectedTables',
        key: 'selectedTables',
    }
]
class MainFrmTableList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                size="large"
                className="mt-3"
                >
                <Table
                    dataSource={ScheduleTableContent}
                    columns={TableColumns} bordered/>
            </Card>
        );
    }
}

export default MainFrmTableList;