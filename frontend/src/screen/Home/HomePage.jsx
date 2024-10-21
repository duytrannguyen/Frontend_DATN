import { Layout, Menu, Avatar, Button, Popover, message } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { TOKEN } from "../../constant/APIConstant";
import { useNavigate } from "react-router-dom";
import {
  getGoogleUserInfo,
  getSellerService,
  getTokenGoogle,
  getUserService,
} from "../../service/API";
const items1 = [
  {
    id: 1,
    title: "Kênh người bán",
    to: "http://localhost:5174/seller/login",
  },
  {
    id: 2,
    title: "Đăng nhập",
    to: "/user/login",
  },
].map((key) => ({
  key: key.id,
  label: (
    <>
      <Link to={key.to} style={{ color: "white" }}>
        {key.title}
      </Link>
    </>
  ),
}));
const HomePage = () => {
  const [display, setDisplay] = useState("none");
  const [menuDisplay, setMenuDisplay] = useState("block");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const content = (
    <>
      <div>
        {data.userName}
        <Button
          onClick={() => {
            navigate("/account/profile");
          }}
          color="black"
          variant="link"
        >
          Tài khoản của tôi
        </Button>
      </div>
    </>
  );
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      getTokenGoogle(url.href)
        .then((res) => {
          getGoogleUserInfo(res)
            .then((res) => {
              localStorage.setItem(TOKEN, res.token);
            })
            .catch(() => {});
        })
        .catch(() => {});
    }
    const params = new URLSearchParams(location.search);
    const tokenLink = params.get("token");
    if (tokenLink) {
      localStorage.setItem(TOKEN, tokenLink);
    }
    const token = localStorage.getItem(TOKEN);
    if (token) {
      getUserService()
        .then((res) => {
          setData(res);
        })
        .catch(() => {
          navigate("/user/login");
          message.error("Phiên làm việc đã hết hạn");
          localStorage.removeItem(TOKEN);
        });
      setDisplay("block");
      setMenuDisplay("none");
    } else {
      setDisplay("none");
      setMenuDisplay("block");
    }
  }, []);

  return (
    <>
      <Layout.Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "gray",
          height: "40px",
        }}
      >
        <div style={{ display: menuDisplay }}>
          <div className="demo-logo" />
          <Menu
            theme="white"
            mode="horizontal"
            items={items1}
            style={{ flex: 1, minWidth: 0, color: "white" }}
          />
        </div>
        <div style={{ display: display }}>
          <Button
            onClick={() => {
              if (localStorage.getItem(TOKEN)) {
                getSellerService()
                  .then(() => {
                    window.location.href = "http://localhost:5174/seller/home";
                  })
                  .catch((err) => {
                    if (err.response.status === 400) {
                      const token = localStorage.getItem(TOKEN);
                      window.location.href =
                        "http://localhost:5174/register_seller?token=" + token;
                    }
                  });
              } else {
                window.location.href = "http://localhost:5174/seller/login";
              }
            }}
            type="button"
            style={{ background: "gray", color: "white" }}
            variant="solid"
          >
            Kênh người bán
          </Button>
          <Popover content={content}>
            <Avatar src={<img src={data.avatarProfile} alt="avatar" />} />
          </Popover>
          <Button
            onClick={() => {
              localStorage.removeItem(TOKEN);
              navigate("/");
              window.location.reload();
            }}
            type="button"
            style={{ background: "gray", color: "white" }}
            variant="solid"
          >
            Đăng xuất
          </Button>
        </div>
      </Layout.Header>
      <Outlet context={data} />
    </>
  );
};

export default HomePage;
