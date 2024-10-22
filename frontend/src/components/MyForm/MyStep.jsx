import { useState, useEffect } from "react";
import { Button, message, Steps, theme, Form, Input, Upload, Spin } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { DOMAIN } from "../../constant/APIConstant"
import My_Description from "./MyDescription";
const MyStep = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);

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
      JSON.stringify({ ...shopProfile, ...values })
    );
    next();
  };

  const normFileFront = (e) => (Array.isArray(e) ? e : e?.fileList);
  const normFileBack = (e) => (Array.isArray(e) ? e : e?.fileList);

  useEffect(() => {
    const shopProfile = localStorage.getItem("shopProfile");
    if (shopProfile) {
      form.setFieldsValue(JSON.parse(shopProfile));
    }
  }, [current, form]);
 
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
            initialValues={{ email: "chuonggiang2209@gmail.com" }}
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
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mã số thuế"
              name="taxCode"
              rules={[
                { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button
                className="bg-[#ee4d2d] text-white"
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
              >
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload>
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button
                className="bg-[#ee4d2d] text-white"
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
          <My_Description/>
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
            className="bg-[#ee4d2d] text-white"
            type="text"
            onClick={() => {
              setDisabled(true);
              setTimeout(() => {
                localStorage.removeItem("shopProfile");
                form.resetFields();
                setCurrent(0);
                message.success("Đăng ký tài khoản người bán thành công!");
                setDisabled(false);
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
            className="bg-[#ee4d2d] text-white"
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

export default MyStep;
