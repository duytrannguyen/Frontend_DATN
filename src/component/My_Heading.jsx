import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function My_Heading({ title }) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-none w-32">
                  <Link to="/">
                    <img
                      alt="Your Company"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
                      className="h-auto w-32"
                    />
                  </Link>
                </div>
                <div className="flex-none w-15">
                  <p className="text-gray-900 font-normal text-lg mt-3 ml-3">
                    {title}
                  </p>
                </div>
              </div>
              <div className="justify-items-end ">
                <div className="text-orange-400 p-10 mt-2">
                  <a href="https://help.shopee.vn/vn/s">Bạn cần giúp đỡ?</a>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
      <hr></hr>
    </>
  );
}
My_Heading.propTypes = {
  title: PropTypes.string,
};
export default My_Heading;
