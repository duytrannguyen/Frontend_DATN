import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Flex, message, Upload } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { DOMAIN } from "../../constant/APIConstant";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const My_Avatar = ({ change }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    change(info.file);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <Flex gap="middle" wrap>
      <Upload
        name="file"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={DOMAIN + "/user/uploadTest"}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Avatar size={100} src={<img src={imageUrl} alt="avatar" />} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Flex>
  );
};

My_Avatar.propTypes = {
  change: PropTypes.func,
};
export default My_Avatar;
