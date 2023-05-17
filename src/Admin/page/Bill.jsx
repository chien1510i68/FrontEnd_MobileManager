import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  PhoneOutlined,
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { getAllProduct } from "../api/axios";

function Bill(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const { TextArea } = Input;
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "productName",
      headerName: "Tên sản phẩm ",
      width: 150,
      align: "center",
    },
    {
      field: "price",
      headerName: "Giá",
      width: 70,
      type: "number",
      align: "center",
    },
    {
      field: "image",
      headerName: "Ảnh",
      width: 80,
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Số lượng ",
      width: 80,
      align: "center",
    },

    {
      field: "edit",
      headerName: "",
      width: 20,
      renderCell: (params) => (
        <button onClick={() => handleEdit(params.row)}>
          <DeleteOutlined className="text-rose-700" />
        </button>
      ),
      align: "center",
    },
    
  ];
  const [rows , setRows] = useState([]);
  useEffect(()=>{
    const fetchProduct = async ()=>{
      const response = await getAllProduct();
      setRows(response)
    };
    fetchProduct();
  },[])
  // const rows = [
  //   {
  //     id: 1,
  //     productName: "Iphone 14",
  //     price: "15000",
  //     quantity: "2",
  //     image: "image 01",
  //   },
  //   {
  //     id: 2,
  //     productName: "Iphone 14",
  //     price: "15000",
  //     quantity: "2",
  //     image: "image 01",
  //   },
  //   {
  //     id: 3,
  //     productName: "Iphone 14",
  //     price: "15000",
  //     quantity: "2",
  //     image: "image 01",
  //   },
  // ];

  const handleEdit = () => {
    // Xử lý sự kiện khi nhấn nút Sửa
  };

  const handleDelete = () => {
    // Xử lý sự kiện khi nhấn nút Xóa
  };
  return (
    <>
      <Search
        placeholder="Search product"
        onSearch={onSearch}
        className="w-[90%] mx-auto block"
      />

      <div className="flex w-full justify-between mt-[30px]">
        <div className="w-[60%]">
          <Box
            sx={{
              height: 400,
              width: "100%",
              "& .MuiDataGrid-root":
                "bg-white shadow-md rounded-lg overflow-hidden",
              "& .MuiDataGrid-row:hover": "bg-gray-100",
              " & .MuiDataGrid-cell": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              "& .MuiDataGrid-columnHeader": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
              },
              "& .MuiDataGrid-selectedRow": "bg-gray-100",
            }}
          >
            <DataGrid
              sx={{
                "& .MuiDataGrid-cell:focus-within": {
                  outline: "none",
                },
                "& .MuiDataGrid-columnHeader": {
                  // backgroundColor: 'gray',
                  textAlign: "center",
                },
              }}
              columns={columns}
              rows={rows}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
        <div className="w-[35%] bg-[#c4bfc94a] rounded-[5px]">
          <h2 className="font-[500] text-[18px] text-center pt-1 my-[20px] ">
            THÔNG TIN THANH TOÁN
          </h2>
          <form action="">
            <Input
              size="large"
              placeholder="Nhập địa chỉ "
              className="w-[95%] ml-2"
              prefix={<PhoneOutlined />}
            />
            <Input
              size="large"
              placeholder="Nhập số điện thoại"
              className="w-[95%] ml-2 mt-2 "
              prefix={<UserOutlined />}
            />
            <TextArea
              rows={4}
              placeholder="Ghi chú đơn hàng"
              className="w-[95%] ml-2 mt-[30px]"
            />
            <h3 className="font-[500] ml-2 text-[16px] pt-1 my-[20px]">
              Tổng tiền : 2000000đ
            </h3>
            <Button
              type="primary"
              className="bg-[#2e9f21] mx-auto block mt-[20px]"
            >
              THANH TOÁN NGAY
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Bill;
