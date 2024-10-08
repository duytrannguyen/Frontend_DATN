import { Layout } from "antd";
import My_Step from "../../component/My_Step";
import My_Heading from "../../component/My_Heading";

const Register_Seller = () => {
  return (
    <>
      <div>
        <My_Heading title="Đăng ký tài khoản người bán" />
      </div>
      <Layout >
        <Layout.Content
          style={{
            padding: "100px 200px",
            height: "100vh",
          }}
        >
          <My_Step />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Register_Seller;
