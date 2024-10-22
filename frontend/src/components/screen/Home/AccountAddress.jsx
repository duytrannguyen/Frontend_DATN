import { Layout, Select } from "antd";
import { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import {
  getProvinces,
  getDistricts,
  getCommunes,
  getAddressesService,
  addAddressService,
} from "../../service/API";
import AccountAddressTable from "./AccountAddressTable";
import { useOutletContext } from "react-router-dom";
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
const AccountAddress = () => {
  const { usersId } = useOutletContext();
  const [componentVariant, setComponentVariant] = useState("filled");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const getDistrict = async (provinceId) => {
    setDistricts([]);
    const response = await getDistricts(provinceId.split("/")[0]);
    setDistricts(response);
  };
  const getCommune = async (districtId) => {
    setCommunes([]);
    const response = await getCommunes(districtId.split("/")[0]);
    setCommunes(response);
  };
  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };
  const fetchAddresses = async () => {
    const response = await getAddressesService(usersId);
    console.log(response);
    setAddresses(response);
  };
  const onFinish = (values) => {
    const data = {
      idProvince: values.province.split("/")[0],
      idDistrict: values.disrtict.split("/")[0],
      idCommune: values.commune.split("/")[0],
      streetName: values.street,
      province: values.province.split("/")[1],
      district: values.disrtict.split("/")[1],
      commune: values.commune.split("/")[1],
    };

    addAddressService(usersId, data).then(() => {
      message.success("Thêm địa chỉ thành công!");
      fetchAddresses();
    });
  };
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await getProvinces();
      setProvinces(response);
    };
    fetchProvinces();
    fetchAddresses();
  }, [usersId]);

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
            {...formItemLayout}
            onValuesChange={onFormVariantChange}
            variant={componentVariant}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              variant: componentVariant,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Đường"
              name="street"
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
              name="province"
              label="Thành phố"
              rules={[
                { required: true, message: "Vui lòng chọn tỉnh/thành phố!" },
              ]}
            >
              <Select
                placeholder="Chọn tỉnh/thành phố"
                onChange={getDistrict}
                allowClear
              >
                {provinces.map((province, index) => (
                  <Select.Option
                    key={index}
                    value={province.id + "/" + province.name}
                  >
                    {province.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="disrtict"
              label="Quận"
              rules={[{ required: true, message: "Vui lòng chọn Quận/Huyện!" }]}
            >
              <Select
                placeholder="Chọn Quận/Huyện"
                onChange={getCommune}
                allowClear
              >
                {districts.map((district, index) => (
                  <Select.Option
                    key={index}
                    value={district.id + "/" + district.name}
                  >
                    {district.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="commune"
              label="Phường"
              rules={[{ required: true, message: "Vui lòng chọn Phường/Xã!" }]}
            >
              <Select placeholder="Chọn Phường/Xã" allowClear>
                {communes.map((commune, index) => (
                  <Select.Option
                    key={index}
                    value={commune.id + "/" + commune.name}
                  >
                    {commune.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button
                style={{
                  backgroundColor: "gray",
                  color: "white",
                }}
                type="text"
                htmlType="submit"
              >
                Lưu địa chỉ
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AccountAddressTable
        reset={fetchAddresses}
        list={addresses}
        id={usersId}
      />
    </Layout.Content>
  );
};

export default AccountAddress;
