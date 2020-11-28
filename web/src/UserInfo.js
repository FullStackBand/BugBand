import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import axios from 'axios';

class UserInfo extends Component {
    state = {
        userName: '',
        email: '',
        columns: [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '电子邮件',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: '创建时间',
                dataIndex: 'regTime',
                key: 'regTime'
            }
        ],
        data: [],
        loading: false,
        selectedRowKeys: [],
        selectedRows: []
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        this.setState({
            loading: true
        });
        axios.get('/rest/user').then(res => {
            if (res && res.status === 200) {
                const { data } = res;
                this.setState({
                    data: data && data.length ? data.map(row => ({ key: row.id, ...row })) : [],
                    loading: false
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    addUser = (userName, email) => {
        this.setState({
            loading: true
        });
        axios.post('/rest/user', {
            userName: userName,
            email: email
        }).then(res => {
            if (res && res.status === 200) {
                this.getUser();
                this.setState({
                    userName: '',
                    email: ''
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    headleUserName = event => {
        const { target: { value: userName } } = event;
        this.setState({
            userName
        });
    }

    headleEmail = event => {
        const { target: { value: email } } = event;
        this.setState({
            email
        });
    }

    headleSubmit = () => {
        const { userName, email } = this.state;
        this.addUser(userName, email);
    }

    headleDetele = () => {
        axios.delete('/rest/user').then(res => {
            if (res && res.status === 200) {
                this.getUser();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { columns, data, userName, email, loading, selectedRowKeys } = this.state;
        return (<div style={{ width: '98%', margin: 'auto' }}>
            <Row style={{ margin: '0.5rem' }}>
                <Col span={1}>
                    <Input placeholder='User Name' value={userName} onChange={this.headleUserName} />
                </Col>
                <Col span={1}>
                    <Input placeholder='Email' value={email} onChange={this.headleEmail} />
                </Col>
                <Col span={1}>
                    <Button type="primary" onClick={this.headleSubmit}>提交</Button>
                </Col>
                <Col span={1}>
                    <Button onClick={() => { this.getUser(); }}>刷新</Button>
                </Col>
                <Col span={1}>
                    <Button onClick={this.headleDetele}>删除</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                rowSelection={{
                    selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(selectedRows);
                        this.setState({ selectedRowKeys, selectedRows });
                    }
                }}
            />
        </div>);
    }
}

export default UserInfo;