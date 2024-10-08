import { Layout, message, Radio } from "antd";
import { useState } from "react";
import { Button, DatePicker, Form, Input, Spin } from "antd";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import My_Avatar from "../../component/My_Avatar";
import { editService } from "../../service/API";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/vi";
import { LoadingOutlined } from "@ant-design/icons";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
dayjs.locale("vi");
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const AccountProfile = () => {
  const { usersId, userName, phone, gender, fullName, email, birthDate } =
    useOutletContext();
  const [form] = Form.useForm();
  const [componentVariant, setComponentVariant] = useState("filled");
  const [file, setFile] = useState("");
  const [spin, setSpin] = useState(false);
  useEffect(() => {
    form.setFieldsValue({
      userName,
      email,
      fullName,
      phone,
      gender,
      birthDate: birthDate ? dayjs(birthDate, dateFormat) : null,
    });
  }, [userName, phone, gender, fullName, email, birthDate]);

  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };
  const onFinish = (values) => {
    setSpin(true);
    setTimeout(() => {
      editService(usersId, values, file)
        .then((res) => {
          setSpin(false);
          console.log(res);
          message.success("Cập nhật thông tin thành công");
        })
        .catch((err) => {
          setSpin(false);
          message.error("Cập nhật thông tin thất bại");
          console.log(err);
        });
    }, 3000);
  };
  const getFileAvar = (file) => {
    setFile(file);
  };
  return (
    <Layout.Content
      style={{
        padding: "24px 24px",
        minHeight: 500,
      }}
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Form
            form={form}
            {...formItemLayout}
            onValuesChange={onFormVariantChange}
            variant={componentVariant}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Họ và tên"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đúng thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tên người dùng"
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đúng thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đúng thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Giới Tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đúng thông tin!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value={true}>Nam</Radio>
                <Radio value={false}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Ngày sinh"
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đúng thông tin!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item label="Ảnh đại diện">
              <My_Avatar change={getFileAvar} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button
                disabled={spin}
                
                style={{
                  backgroundColor: "#ee4d2d",
                  color: "white",
                }}
                type="text"
                htmlType="submit"
              >
                <div>
                  <Spin
                    spinning={spin}
                    indicator={
                      <LoadingOutlined style={{ color: "white" }} spin />
                    }
                    size="small"
                    className="mr-2"
                  />
                  Lưu thông tin
                </div>
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* <div>
            <My_Avatar />
        </div> */}
      </div>
    </Layout.Content>
  );
};

export default AccountProfile;
