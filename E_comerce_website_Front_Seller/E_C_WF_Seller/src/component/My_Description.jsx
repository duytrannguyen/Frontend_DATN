import { Descriptions } from "antd";
import { Upload } from "antd";

function My_Description() {
  const shopProfile = JSON.parse(localStorage.getItem("shopProfile")) || {};
  const onPreview = async (file) => {
    console.log("file", file);
    let src = file.thumbUrl;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
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
      label: "Mã số thuế",
      children: <p className="text-blue-500">{shopProfile.taxCode}</p>,
    },
    {
      key: "6",
    },
    {
      key: "7",
      label: "Căn cước công dân",
      children: (
        <p className="text-blue-500">{shopProfile.identificationNumber}</p>
      ),
    },
    {
      key: "8",
      label: "Mặt trước",
      children: (
        <Upload
          listType="picture-card"
          showUploadList={{ showPreviewIcon: true, showRemoveIcon: false }}
          defaultFileList={shopProfile.uploadIdentificationFront}
          onPreview={onPreview}
        />
      ),
    },
    {
      key: "9",
      label: "Mặt sau",
      children: (
        <Upload
          listType="picture-card"
          showUploadList={{ showPreviewIcon: true, showRemoveIcon: false }}
          defaultFileList={shopProfile.uploadIdentificationBack}
          onPreview={onPreview}
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
