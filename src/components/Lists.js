import React, { useState, useEffect } from "react";
import { Table, Button, Divider, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchUserList } from "../store/users/actions";
import get from "lodash/get";

const _ = { get };

const Lists = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.users.userList);
  const noti = useSelector((state) => state.users);

  useEffect(() => {
    const show = _.get(noti,'data',false)
    if (show) {
      notification.success({
        message: "success",
        description: "Data Fetched SuccessFully",
      });
    }
  }, [noti]);

  const callHandler = () => {
    dispatch(actionFetchUserList());
    setShow(true);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  return (
    <React.Fragment>
      <h1>Lists Component .. </h1>
      <Button onClick={callHandler} type="primary">
        Call Saga
      </Button>
      <Divider orientation="middle">User Data Table</Divider>
      {show ? (
        <Table
          dataSource={list}
          columns={columns}
          rowKey={(record) => record.email}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Lists;
