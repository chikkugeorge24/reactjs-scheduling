import React, { Component } from 'react';
import { Card, Input, Form, Select, Button } from 'antd';

const styles = {
    inputSearch: {
        marginLeft: "10px",
        width: "200px"
    }
}
class MainFrmFilter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card
                className="cardStyle"
                size="small"
            >
                <Form
                    layout="inline">
                    <Form.Item>
                        <Input.Search
                            placeholder="Scheduler Name"
                            style={styles.inputSearch}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Select
                            placeholder="Host: Port"
                            style={{ width: "200px" }}>
                            <Select.Option
                                value="163:1521">
                                192.168.50.163:1521
                            </Select.Option>
                            <Select.Option
                                value="163:8080">
                                192.168.50.163:8080
                            </Select.Option>
                            <Select.Option
                                value="163:8082">
                                192.168.50.163:8082
                            </Select.Option>
                            <Select.Option
                                value="163:8081">
                                192.168.50.163:8081
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="submit"
                            type="primary"
                            icon="plus-circle"> Add
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default MainFrmFilter;