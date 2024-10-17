import { Space, Table, Tag } from "antd";
import { Button, message, Popconfirm } from "antd";
import { deleteAddressService } from "../../service/API";
import PropTypes from "prop-types";
const columns = [
  {
    title: "Đường",
    dataIndex: "street",
    key: "street",
  },
  {
    title: "Phường/Xã",
    dataIndex: "commune",
    key: "commune",
  },
  {
    title: "Quận/Huyện",
    dataIndex: "district",
    key: "district",
  },
  {
    title: "Tỉnh/Thành phố",
    dataIndex: "province",
    key: "province",
  },
  {
    title: "Trạng thái",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 8 ? "gray" : "gray";
          if (tag === "Mặc định") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    key: "action",
    dataIndex: "action",
  },
];

const AccountAddressTable = ({ list, id, reset }) => {
  const cancel = () => {};
  const data = list.map((item, index) => {
    return {
      key: index,
      id: item.addressId,
      street: item.streetName,
      commune: item.communeName,
      district: item.districtName,
      province: item.provinceName,
      tags:
        index == 0 ? ["Mặc định", "Địa chỉ nhận hàng"] : ["Địa chỉ nhận hàng"],
      action: (
        <Space size="middle">
          <Popconfirm
            title="Xóa địa chỉ"
            description="Có muốn xóa địa chỉ này?"
            onConfirm={() => {
              deleteAddressService(id, item.addressId)
                .then(() => {
                  reset();
                  message.success("Xóa thành công");
                })
                .catch(() => {
                  message.error("Xóa thất bại");
                });
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button className="bg-[#ee4d2d] text-white" type="text">
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    };
  });
  return <Table columns={columns} dataSource={data} size="small" />;
};
AccountAddressTable.propTypes = {
  reset: PropTypes.func,
  id: PropTypes.number,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      addressId: PropTypes.number,
      street: PropTypes.string,
      commune: PropTypes.string,
      district: PropTypes.string,
      province: PropTypes.string,
    })
  ),
};
export default AccountAddressTable;
