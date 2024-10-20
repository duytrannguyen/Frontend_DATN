import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function My_Form_Register({ event, to, spin }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    event({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border rounded-lg shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Đăng ký</h2>
              <form onSubmit={handleSubmit}>
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
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    placeholder="Mật khẩu"
                    className="form-control"
                  />
                </div>
                <button
                  disabled={spin}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <Spin
                      spinning={spin}
                      indicator={
                        <LoadingOutlined style={{ color: "white" }} spin />
                      }
                      size="small"
                      className="me-2"
                    />
                    Đăng ký
                  </div>
                </button>
                <div className="text-center mt-3">
                  <Link to={to} className="text-muted">
                    Đăng nhập
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

My_Form_Register.propTypes = {
  event: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  spin: PropTypes.bool.isRequired,
};

export default My_Form_Register;
