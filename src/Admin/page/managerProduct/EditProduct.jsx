import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { getProduct } from "../../api/axios";

function EditProduct({ id }) {
  const [prevId, setPrevId] = useState(null);
  const onFinish = (values) => {
    console.log("id:", { id });

    // setOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    let isMounted = true;
    if (id !== prevId) {
      setPrevId(id);

      const product = getProduct({ page: 0, size: 1, productId: id })
        .then((res) => {
          if (isMounted) {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, prevId]);

  return (
    <div>
      <Form
        name="basic"
        className=""
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên sản phẩm "
          name="productName"
          rules={[
            { required: true, message: "Please input your productName!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: "Please input your image!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Thẻ nhớ"
          name="memoryStick"
          rules={[
            { required: false, message: "Please input your memoryStick!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Camera"
          name="camera"
          rules={[{ required: true, message: "Please input your camera!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Bộ nhớ"
          name="memory"
          rules={[{ required: true, message: "Please input your memory!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Hệ điều hành"
          name="operatingSystem"
          rules={[
            { required: true, message: "Please input your operatingSystem!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Dung lượng pin"
          name="battery"
          rules={[{ required: true, message: "Please input your battery!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Nhà sản xuất"
          name="manufacturer"
          rules={[
            { required: true, message: "Please input your manufacturer!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Kích thước"
          name="size"
          rules={[{ required: true, message: "Please input your size!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Màu sắc"
          name="color"
          rules={[{ required: true, message: "Please input your color!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Thời gian bảo hành "
          name="warrantyPeriod"
          rules={[
            { required: true, message: "Please input your warrantyPeriod!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        {/* <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#d95050] ml-[20px]"
              onClick={() => navigate("/admin/managerProduct")}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#348f43] ml-[20px]"
            >
              Submit
            </Button>
          </Form.Item> */}
      </Form>
      {/* </Dialog> */}
    </div>
  );
}
export default EditProduct;
