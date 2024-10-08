import My_Form_Register from "../../component/My_Form_Register";

const Register = () => {
  const event = (e) => {
    console.log(e);
  };
  return <My_Form_Register spin={false} event={event} to="/seller/login" />;
};

export default Register;
