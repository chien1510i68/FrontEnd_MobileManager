import React, { useEffect } from "react";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Modal, Space, Table, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../api/axios";
import EditProduct from "./EditProduct";
function MangerProduct(props) {
  const [openDialogEditProduct, setOpenDialogEditProduct] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState({ page: 0, size: 10 });
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedId, setSelectedId] = useState(null);
  // const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const navigate = useNavigate();

  const { Search } = Input;
  const onSearch = (value) => {
    const newCondition = { ...condition, productId: value };
    setCondition(newCondition);
    console.log(newCondition);
  };

  // const onFinish = async(condition)=>{
  //   const listProduct =await getProduct(condition).then(()=>{
  //     console.log(listProduct);
  //     setData(listProduct.data)
  //   })
  // }
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    const listProduct = getProduct(condition).then((res) => {
      // console.log(res.data.data.listItem);
      setData(res.data.data.listItem);
    });
  }, [condition]);
 
  const columns = [
    {
      title: "Mã sản phẩm ",
      dataIndex: "productId",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantityInStore",
    },
    {
      title: "Nhà sản xuất",
      dataIndex: "manufacturer",
    },
    {
      title: "",
      dataIndex: "",
    },
    {
      title: "",
      dataIndex: "",
    },
    {
      title: "Tùy chọn",
      align: "center",
      render: (e, record, index) => (
        <Space size={10} key={index}>
          <>
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<EditOutlined />}
              // onClick={() => handleOptionClick(record.productId)}
              // onClick={() => setOpenDialogEditProduct(true)}
              onClick={() => handleEditProduct(record.productId)}
            ></Button>
            <Modal 
              className="text-center"
              title="Chỉnh sửa thông tin sản phẩm "
              centered
              open={openDialogEditProduct}
              onOk={() => setOpenDialogEditProduct(false)}
              onCancel={() => setOpenDialogEditProduct(false)}
              width={1000}
            >
              <EditProduct id = {selectedId} />
            </Modal>
          </>

          <>
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<DeleteOutlined />}
            ></Button>
          </>

          <Button
            className="flex justify-center items-center text-md shadow-md"
            icon={<SolutionOutlined />}
            onClick={() => {
              navigate("/admin/staff");
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  // const handleOptionClick = (productId) => {
  //   console.log(productId);
  //   if (openDialogEditProduct == true) {
  //     <DialogEditProduct />;
  //   }
  // };
  const handleEditProduct = (productId) => {
    setOpenDialogEditProduct(true);
    setSelectedId(productId);
    console.log(selectedId);
  };

  const onClick = ({ key }) => {
    // message.info(`Đang sắp xếp theo ${label}`);
    const newCondition = { ...condition, keySort: key };
    setCondition(newCondition);
    console.log(newCondition);
    // setSortCondition(newCondition);
  };

  const items = [
    {
      key: "1",
      label: "Mã tăng dần",
    },

    {
      key: "2",
      label: "Số lượng nhiều nhất",
    },
  ];
  return (
    <div>
      <div className="flex items-center w-full justify-around mb-[40px]">
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[20%]"
          onClick={() => navigate("/admin/addProduct")}
        >
          <PlusCircleOutlined />
          Thêm mới sản phẩm
        </Button>

        <Search
          placeholder="Nhập vào mã sản phẩm"
          onSearch={onSearch}
          className="w-[40%]"
        />

        {/* </Form> */}

        <Dropdown
          menu={{ items, onClick }}
          className="my-[20px] block w-[20%] "
        >
          <a onClick={(e) => e.preventDefault()}>
            {/* <Space className="">
            </Space> */}
            <Button
              type="primary"
              shape="round"
              className="bg-[#3eaf51] flex items-center"
            >
              Sắp xếp theo
              <DownOutlined />
            </Button>
          </a>
        </Dropdown>
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[15%]"
        >
          <DeleteOutlined />
          Xóa tất cả
        </Button>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          onChange: (page, size) => {
            setPageSize(size);
            setPageCurrent(page);
          },
          defaultCurrent: 1,
          pageSize: pageSize,
          current: pageCurrent,
          // showSizeChanger: true,
        }}
      />
    </div>
  );
}

export default MangerProduct;
