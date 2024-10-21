import My_Form_Forgot from "../../component/MyFormForgot";
const ForgotPassword = () => {
  const event = (e) => {
    console.log(e);
  };
  return (
    <>
      <My_Form_Forgot spin={false} event={event} to="/seller/login" />
    </>
  );
};

export default ForgotPassword;
