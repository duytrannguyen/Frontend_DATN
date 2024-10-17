import { useState, useEffect } from "react";
import { Button, message, Steps, theme, Form, Input, Upload, Spin } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { DOMAIN } from "../constant/APIConstant";
import { registerSellerService } from "../service/API";
import My_Description from "./My_Description";
import PropTypes from "prop-types";
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Bạn chỉ có thể tải lên file JPG/PNG!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Kích thước file phải nhỏ hơn 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const My_Step = ({ id, email }) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [fileFront, setFileFront] = useState({});
  const [fileBack, setFileBack] = useState([]);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const onFinishShopProfile = (values) => {
    localStorage.setItem("shopProfile", JSON.stringify(values));
    next();
  };

  const onFinishIdentification = (values) => {
    const shopProfile = JSON.parse(localStorage.getItem("shopProfile"));
    localStorage.setItem(
      "shopProfile",
      JSON.stringify({
        ...shopProfile,
        ...values,
        fileFront: fileFront,
        fileBack: fileBack,
      })
    );
    next();
  };

  const normFileFront = (e) => {
    if (Array.isArray(e)) {
      return e;
    } else {
      return e?.fileList;
    }
  };
  const handleFileFrontChange = (info) => {
    if (info.file.status === "done") {
      const file = info.file.originFileObj;
      fileToBase64(file).then((base64) => {
        setFileFront(base64);
      });
    }
  };
  const normFileBack = (e) => {
    if (Array.isArray(e)) {
      return e;
    } else {
      return e?.fileList;
    }
  };
  const handleFileBackChange = (info) => {
    if (info.file.status === "done") {
      const file = info.file.originFileObj;
      fileToBase64(file).then((base64) => {
        setFileBack(base64);
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({ email: email });
    const shopProfile = localStorage.getItem("shopProfile");
    if (shopProfile) {
      form.setFieldsValue(JSON.parse(shopProfile));
    }
  }, [current, form, email]);

  const steps = [
    {
      title: "Thông tin shop",
      content: (
        <div className="p-10">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            onFinish={onFinishShopProfile}
            initialValues={{ email: email }}
            autoComplete="off"
          >
            <Form.Item
              label="Tên shop"
              name="shopName"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Loại hình kinh doanh"
              name="typeBusiness"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
                { pattern:/((09|03|07|08|05)+([0-9]{8})\b)/g, message: "Số điện thoại không hợp lệ!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mã số thuế"
              name="taxCode"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
                { pattern: /^\d{9,12}$/, message: "Mã số thuế không hợp lệ!" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button
                className="bg-gray-400  hover:bg-gray-600 text-white"
                type="text"
                htmlType="submit"
              >
                Tiếp theo
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Thông tin định danh",
      content: (
        <div className="p-10">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            onFinish={onFinishIdentification}
            autoComplete="off"
          >
            <Form.Item
              label="CCCD/CMND"
              name="identificationNumber"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
                { pattern: /^\d{9,12}$/, message: "CCCD/CMND không hợp lệ!" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="uploadIdentificationFront"
              label="Mặt trước"
              valuePropName="fileList"
              getValueFromEvent={normFileFront}
              rules={[
                { required: true, message: "Vui lòng tải đầy đủ thông tin!" },
              ]}
            >
              <Upload
                maxCount={1}
                name="file"
                action={DOMAIN + "/user/uploadTest"}
                listType="picture"
                onChange={handleFileFrontChange}
                beforeUpload={beforeUpload}
              >
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="uploadIdentificationBack"
              label="Mặt sau"
              valuePropName="fileList"
              getValueFromEvent={normFileBack}
              rules={[
                { required: true, message: "Vui lòng tải đầy đủ thông tin!" },
              ]}
            >
              <Upload
                maxCount={1}
                name="file"
                action={DOMAIN + "/user/uploadTest"}
                listType="picture"
                onChange={handleFileBackChange}
                beforeUpload={beforeUpload}
              >
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload>
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button
                className="bg-gray-400  hover:bg-gray-600 text-white"
                type="text"
                htmlType="submit"
              >
                Tiếp theo
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Hoàn tất",
      content: (
        <div className="p-10">
          <My_Description />
        </div>
      ),
    },
  ];

  const { token } = theme.useToken();
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current === steps.length - 1 && (
          <Button
            className="bg-gray-400  hover:bg-gray-600 text-white"
            type="text"
            onClick={() => {
              setDisabled(true);
              setTimeout(() => {
                const shopProfile = JSON.parse(
                  localStorage.getItem("shopProfile")
                );

                registerSellerService(id, shopProfile)
                  .then((res) => {
                    console.log(res);
                    setDisabled(false);
                    localStorage.removeItem("shopProfile");
                    form.resetFields();
                    setCurrent(0);
                    message.success("Đăng ký tài khoản người bán thành công!");
                  })
                  .catch((err) => {
                    setDisabled(false);
                    console.log(err);
                    message.error("Đăng ký tài khoản người bán thất bại!");
                  });
              }, 3000);
            }}
          >
            <div>
              <Spin
                spinning={disabled}
                indicator={<LoadingOutlined style={{ color: "white" }} spin />}
                size="small"
                className="mr-2"
              />
              Hoàn tất
            </div>
          </Button>
        )}
        {current > 0 && (
          <Button
            className="bg-gray-400  hover:bg-gray-600 text-white"
            type="text"
            style={{ margin: "0 8px" }}
            onClick={prev}
          >
            Quay lại
          </Button>
        )}
      </div>
    </>
  );
};
My_Step.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
};
export default My_Step;
