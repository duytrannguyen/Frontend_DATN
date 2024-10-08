import { Descriptions } from "antd";
import { Image } from "antd";

function My_Description() {
  const shopProfile = JSON.parse(localStorage.getItem("shopProfile")) || {};
  const items = [
    {
      key: "1",
      label: "Tên shop",
      children: <p className="text-blue-500">{shopProfile.shopName}</p>,
    },
    {
      key: "2",
      label: "Số điện thoại",
      children: <p className="text-blue-500">{shopProfile.phoneNumber}</p>,
    },
    {
      key: "3",
      label: "Email",
      children: <p className="text-blue-500">{shopProfile.email}</p>,
    },
    {
      key: "4",
      label: "Loại hình kinh doanh",
      children: <p className="text-blue-500">{shopProfile.typeBusiness}</p>,
    },
    {
      key: "5",
      label: "Căn cước công dân",
      children: (
        <p className="text-blue-500">{shopProfile.identificationNumber}</p>
      ),
    },
    {
      key: "6",
      label: "Mã số thuế",
      children: <p className="text-blue-500">{shopProfile.taxCode}</p>,
    },
    {
      key: "7",
      label: "Mặt trước",
      children: (
        <Image
          width={100}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      ),
    },
    {
      key: "8",
      label: "Mặt sau",
      children: (
        <Image
          width={100}
          height="auto"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      ),
    },
  ];
  return (
    <>
      <Descriptions title="Thông tin shop" items={items} />
    </>
  );
}
export default My_Description;
