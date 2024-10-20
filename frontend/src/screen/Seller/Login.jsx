import My_Form_Login from "../../component/My_Form_Login";
import { TOKEN } from "../../constant/APIConstant";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const event = (e) => {
    console.log(e);
    localStorage.setItem(TOKEN, TOKEN);
    navigate("/register_seller");
  };
  return (
    <>
      <My_Form_Login
        event={event}
        toF="/seller/forgot-password"
        toR="/seller/register"
        spin={false}
      />
    </>
  );
};

export default Login;
