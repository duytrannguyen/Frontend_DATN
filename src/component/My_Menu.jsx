import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: "Tài khoản của tôi",
    children: [
      {
        key: "11",
        label: (
          <>
            <Link to="/account/profile">Hồ sơ</Link>
          </>
        ),
      },
      {
        key: "12",
        label: (
          <>
            <Link to="/account/address">Địa chỉ</Link>
          </>
        ),
      },
      {
        key: "13",
        label: (
          <>
            <Link to="/account/change-password">Đổi mật khẩu</Link>
          </>
        ),
      },
      {
        key: "14",
        label: "Thanh toán",
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
function My_Menu() {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys

          .filter((_, index) => index !== repeatIndex)

          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{
          height: "100%",
        }}
        items={items}
      />
    </>
  );
}

export default My_Menu;
