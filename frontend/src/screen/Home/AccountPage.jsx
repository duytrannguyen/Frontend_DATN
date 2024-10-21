import { Breadcrumb, Layout, theme } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import My_Footer from "../../component/MyFooter";
import My_Menu from "../../component/MyMenu";
const { Content, Footer, Sider } = Layout;

const AccountPage = () => {
  const { usersId, userName, phone, gender, fullName, email, birthDate, avatarProfile } =
    useOutletContext();
  const [user, setUser] = useState({});

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    setUser({
      usersId,
      userName,
      phone,
      gender,
      fullName,
      email,
      birthDate,
      avatarProfile,
    });
  }, [userName, phone, gender, fullName, email, birthDate, avatarProfile]);
  return (
    <>
      <div>
        <Layout className="pt-10">
          <Content
            style={{
              padding: "0 200px",
            }}
          >
            <Breadcrumb
              className="font-semibold text-xl"
              style={{
                margin: "16px 0",
              }}
              items={[
                {
                  title: "Hồ sơ của tôi",
                },
              ]}
            ></Breadcrumb>
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                }}
                width={200}
              >
                <My_Menu />
              </Sider>
              <Outlet context={user} />
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          ></Footer>
        </Layout>
      </div>
      <My_Footer />
    </>
  );
};
export default AccountPage;
