import { Button, Form, Input, Layout, Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { changePasswordService } from "../../service/API";
import { useOutletContext } from "react-router-dom";

const AccountChangePassword = () => {
  const [spin, setSpin] = useState(false);
  const { usersId } = useOutletContext();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    setSpin(true);
    // Simulating an API call
    try {
      // Replace with your API call
      if (values.passwordNew != values.ConfirmPasswordNew) {
        message.success("Mật khẩu mới không khớp!");
      } else {
        setTimeout(() => {
          changePasswordService(usersId, values)
            .then(() => {
              setSpin(false);
              message.success("Đổi mật khẩu thành công!");
              form.resetFields();
            })
            .catch(() => {
              setSpin(false);
              message.error("Mật khẩu cũ không đúng!");
            });
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setSpin(false);
      message.error("Đã xảy ra lỗi, vui lòng thử lại!");
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout.Content
      style={{
        padding: "24px 24px",
        minHeight: 500,
      }}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mật khẩu cũ"
          name="passwordOld"
          rules={[
            {
              required: true,
              message: "Vui lòng điền đúng thông tin!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Mật khẩu mới"
          name="passwordNew"
          rules={[
            {
              required: true,
              message: "Vui lòng điền đúng thông tin!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="ConfirmPasswordNew"
          rules={[
            {
              required: true,
              message: "Vui lòng điền đúng thông tin!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("passwordNew") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không khớp!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            disabled={spin}
            style={{
              backgroundColor: "gray",
              color: "white",
            }}
            type="text"
            htmlType="submit"
          >
            <div>
              <Spin
                spinning={spin}
                indicator={<LoadingOutlined style={{ color: "white" }} spin />}
                size="small"
                className="mr-2"
              />
              Đổi mật khẩu
            </div>
          </Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
};

export default AccountChangePassword;
