import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function My_Form_Forgot({ event, to, spin }) {
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    event({
      email: emailRef.current.value,
    });
  };
  return (
    <>
      <div className="w-2/3 h-auto p-10 m-10 ">
        <div className="flex justify-end min-h-full flex-col  px-6 py-12 lg:px-8 size-full md:size-auto border border-slate-300 rounded-lg shadow-lg bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-start text-2xl font-normal leading-9 tracking-tight text-gray-900">
              Quên mật khẩu
            </h2>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="mt-2">
                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email Present"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={spin}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#ee4d2d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <div>
                    <Spin
                      spinning={spin}
                      indicator={
                        <LoadingOutlined style={{ color: "white" }} spin />
                      }
                      size="small"
                      className="mr-2"
                    />
                    Gửi mật khẩu mới
                  </div>
                </button>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs  pt-2">
                      <Link
                        to={to}
                        className="font-normal text-[#d0011b] hover:text-orange-800"
                      >
                        Đăng nhập
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
My_Form_Forgot.propTypes = {
  event: PropTypes.func,
  to: PropTypes.string,
  spin: PropTypes.bool,
};
export default My_Form_Forgot;
