import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function MyFormLogin({ event, toF, toR, spin }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await event({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    } catch (err) {
      setErrorMessage("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' ,marginTop:'0px'}}>
      <div className="card shadow" style={{ width: '100%', borderRadius: '10px' }}>
        <div className="card-body" style={{ padding: '20px' }}>
          {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="form-control"
                aria-label="Email"
                style={{ borderRadius: '5px' }} // Thêm border radius cho input
              />
            </div>
            <div className="mb-3">
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Mật khẩu"
                className="form-control"
                aria-label="Mật khẩu"
                style={{ borderRadius: '5px' }} // Thêm border radius cho input
              />
            </div>
            <button
              disabled={spin}
              type="submit"
              className="btn btn-primary w-100"
              style={{ borderRadius: '5px' }} // Thêm border radius cho button
            >
              {spin ? (
                <>
                  <Spin
                    spinning={spin}
                    indicator={<LoadingOutlined style={{ color: "white" }} spin />}
                    size="small"
                    className="mr-2"
                  />
                  Đang đăng nhập...
                </>
              ) : (
                "Đăng Nhập"
              )}
            </button>
            <div className="d-flex justify-content-between mt-3">
              <Link to={toF} className="link-secondary">Quên mật khẩu?</Link>
              <Link to={toR} className="link-secondary">Đăng ký</Link>
            </div>
            <div className="mt-4">
              <Link
                to="https://accounts.google.com/o/oauth2/auth?scope=email profile openid&redirect_uri=http://localhost:3000&response_type=code&client_id=188735233699-grpbdfailsflahui00gpci9cvd2krm3p.apps.googleusercontent.com&approval_prompt=force"
                type="button"
                className="btn btn-outline-danger w-100"
                style={{ borderRadius: '5px' }} // Thêm border radius cho button
              >
                Đăng Nhập bằng Google
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

MyFormLogin.propTypes = {
  event: PropTypes.func.isRequired,
  toF: PropTypes.string.isRequired,
  toR: PropTypes.string.isRequired,
  spin: PropTypes.bool.isRequired,
};

export default MyFormLogin;
