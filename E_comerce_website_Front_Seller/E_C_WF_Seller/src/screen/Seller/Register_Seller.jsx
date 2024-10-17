import { Layout,message } from "antd";
import My_Step from "../../component/My_Step";
import My_Heading from "../../component/My_Heading";
import { useState, useEffect } from "react";
import { getUserService } from "../../service/API";
import { useLocation, useNavigate } from "react-router-dom";
import { TOKEN } from "../../constant/APIConstant";
const Register_Seller = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem(TOKEN, token);
    }
    getUserService().then((res) => {
      setUserId(res.usersId+"");
      setEmail(res.email);
    }).catch(() => {
      navigate("/seller/login");
      message.error("Phiên làm việc đã hết hạn");
      localStorage.removeItem(TOKEN);
    });;
  }, []);
  return (
    <>
      <div>
        <My_Heading title="Đăng ký tài khoản người bán" />
      </div>
      <Layout>
        <Layout.Content
          style={{
            padding: "100px 200px",
            height: "100vh",
          }}
        >
          <My_Step id={userId} email={email} />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Register_Seller;
