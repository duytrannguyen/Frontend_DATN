import { Layout, theme } from "antd";
import My_Form_Add_Product from "./My_Form_Add_Product";

function My_Content() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout.Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div className="px-96">
          <My_Form_Add_Product />
        </div>
      </Layout.Content>
    </>
  );
}

export default My_Content;
