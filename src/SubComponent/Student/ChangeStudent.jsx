import React, { Component } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, message, Dropdown, Menu, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        id: `0000${i}`,
        firstname: `firstname ${i}`,
        lastname: `lastname ${i}`,
        class: `6/${i}`,
        password: `password ${i}`
    });
}
const FormItem = Form.Item;
const Search = Input.Search;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            datasearch: [],
            searchby: 'id',
            editingKey: '',
            searchvalue:''
        };

        this.columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                width: '12%',
                editable: true,
            },
            {
                title: 'First name',
                dataIndex: 'firstname',
                width: '20%',
                editable: true,
            },
            {
                title: 'Last name',
                dataIndex: 'lastname',
                width: '20%',
                editable: true,
            },
            {
                title: 'Class',
                dataIndex: 'class',
                width: '10%',
                editable: true,
            },
            {
                title: 'Password',
                dataIndex: 'password',
                width: '20%',
                editable: true,
            },
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                Save
                          </a>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="Sure to cancel?"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                    <div>
                                        <a onClick={() => this.edit(record.key)} style={{ marginRight: 10 }} >Edit</a>
                                        {
                                            this.state.searchvalue ? (this.state.datasearch.length >= 1
                                                ? (
                                                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                                                        <a href="javascript:;">Delete</a>
                                                    </Popconfirm>
                                                ) : null)
                                                : (this.state.data.length >= 1
                                                    ? (
                                                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                                                            <a href="javascript:;">Delete</a>
                                                        </Popconfirm>
                                                    ) : null)
                                        }
                                    </div>


                                )}
                        </div>
                    );
                },
            },
        ];
    }
    handleDelete = (key) => {
        if (this.state.searchvalue) {
            const datasearch = [...this.state.datasearch];
            this.setState({ datasearch: datasearch.filter(item => item.key !== key) });
        }
        else {
            const data = [...this.state.data];
            this.setState({ data: data.filter(item => item.key !== key) });
        }

    }

    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };

    edit(key) {
        this.setState({ editingKey: key });
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            if (!this.state.searchvalue) {
                const newData = [...this.state.data];
                const index = newData.findIndex(item => key === item.key);
                if (index > -1) {
                    const item = newData[index];
                    newData.splice(index, 1, {
                        ...item,
                        ...row,
                    });
                    this.setState({ data: newData, editingKey: '' });
                    console.log("ba");
                } else {
                    console.log("aa");
                    newData.push(row);
                    this.setState({ data: newData, editingKey: '' });
                }

            }
            else {
                const newData = [...this.state.data];
                const index = newData.findIndex(item => key === item.key);
                if (index > -1) {
                    const item = newData[index];
                    newData.splice(index, 1, {
                        ...item,
                        ...row,
                    });
                    this.setState({ datasearch: newData, editingKey: '' });
                    console.log("ba");
                } else {
                    console.log("aa");
                    newData.push(row);
                    this.setState({ datasearch: newData, editingKey: '' });
                }
            }

        });
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    SearchHandle = (e) => {
        this.setState({searchvalue:e.target.value});
        let textsearch = e.target.value;
        let newData;
        if (this.state.searchby === 'id') {
            newData = data.filter(a_data => a_data.id.indexOf(textsearch) > -1);
        }
        else if (this.state.searchby === 'firstname') {
            newData = data.filter(a_data => a_data.firstname.indexOf(textsearch) > -1);
        }
        else if (this.state.searchby === 'lastname') {
            newData = data.filter(a_data => a_data.lastname.indexOf(textsearch) > -1);
        }
        else if (this.state.searchby === 'class') {
            newData = data.filter(a_data => a_data.class.indexOf(textsearch) > -1);
        }
        this.setState({ datasearch: newData });
    }

    handleMenuClick = (e) => {
        message.info('Search by ' + e.key, 0.8);
        this.setState({ searchby: e.key });
    }

    emitEmpty = () => {
        this.setState({ searchvalue: '' });
      }


    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="id">Id</Menu.Item>
                <Menu.Item key="firstname">Firstname</Menu.Item>
                <Menu.Item key="lastname">Lastname</Menu.Item>
                <Menu.Item key="class">Class</Menu.Item>
            </Menu>
        );
        const suffix = this.state.searchvalue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;


        return (
            <div>
                <div style={{ marginBottom: 10, textAlign: 'center' }}>
                    <Dropdown overlay={menu}>
                        <Button style={{ marginRight: 1 }}>
                            Column <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Input
                        placeholder={"search by " + this.state.searchby}
                        // onSearch={value => console.log(value)}
                        suffix={suffix}
                        onChange={this.SearchHandle}
                        value={this.state.searchvalue}
                        style={{ width: 300 }}
                    />
                </div>
                <Table
                    pagination={{ pageSize: 5 }}
                    components={components}
                    bordered
                    dataSource={this.state.searchvalue ? this.state.datasearch : this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                />
            </div>
        );
    }
}


export default EditableTable