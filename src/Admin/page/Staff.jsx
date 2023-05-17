import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUser, getAllUser } from "../api/axios";

const columns = [
  {
    title: "Mã nhân viên",
    dataIndex: "userID",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber",
  },
  {
    title: "Địa chỉ",
    dataIndex: "addr",
  },
  {
    title: "Họ và tên",
    dataIndex: "userName",
  },
];

function Staff(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCurrent, setPageCureent] = useState(1);
  const { Search } = Input;
  const [id, setId] = useState(1);
  const onSearch = async (value) => {
    setId(value);
    console.log(value);
    const user = await findUser(value);

    setData(user.data.data);
    console.log(user.data);
  };
  const handleFindUser = () => {
    const inforUser = findUser(id);
  };
  useEffect(() => {
    handleFindUser();
  }, []);
  const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const navigate = useNavigate();

  // const data1 = {}
  const handleGetData = async () => {
    const pageCurrent = { start: page, limit: 1 };
    const data1 = await getAllUser(pageCurrent);
    // console.log(data1);
    setData(data1.data.data.listItem);
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div>
      <h2 className="font-[500] text-[20px] mb-5 text-center">
        Danh sách nhân viên
      </h2>
      <div className="flex justify-around mx-5">
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[20%]"
          onClick={() => navigate("/admin/addstaff")}
        >
          <PlusCircleOutlined />
          Thêm mới nhân viên
        </Button>
        <Search
          placeholder="Tìm kiếm thông tin nhân viên "
          onSearch={onSearch}
          className="w-[40%]"
        />
      </div>
      <div className="my-[50px]">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          className="bg-[#333]"
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          onChange: (a) => console.log(a),
        }}
        // locale={{
        //   emptyText: data ? <span>Loading...</span> : <Spin size="large" />,
        // }}
      />
    </div>
  );
}

export default Staff;
