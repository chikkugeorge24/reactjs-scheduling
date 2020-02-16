import React, { Component } from 'react';
import { Card, Input, Typography, select } from 'antd';

class MainFrmFilter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card
                size="small"
                className="mt-3"
                style={{ backgroundColor: "darkkhaki" }}>
                <table>
                    <tr>
                        <td>
                            <div className="m-3">
                                <Typography.Text>
                                    Schedule Name
                            </Typography.Text>
                                <Input.Search
                                    className="ml-3 " />

                            </div>
                        </td>
                        <td>
                            <div
                                className="m-3">
                                <Typography.Text>
                                    DB
                                </Typography.Text>
                                <select
                                    size="small"
                                    className="ml-3"
                                    style={{ width: "160px" }} >
                                    <option
                                        value="163:1521">192.168.50.163:1521
                                    </option>
                                    <option
                                        value="163:8080">192.168.50.163:8080
                                    </option>
                                    <option
                                        value="163:8081">192.168.50.163:8081
                                    </option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </table>
            </Card>
        );
    }
}

export default MainFrmFilter;