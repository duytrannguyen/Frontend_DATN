import My_Footer from "../../component/My_Footer";
import My_Heading from "../../component/My_Heading";
import { Outlet } from "react-router-dom";

const SellerScreen = () => {
  return (
    <>
      <div>
        <My_Heading title="Kênh người bán" />
      </div>
      <div className="h-[600px] min-h-[50vh] flex bg-white bg-no-repeat flex-row justify-center items-center">
        <div className="basis-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <div className="pl-60">
              <h1 className="text-3xl font-normal pb-5 text-[#ee4d2d]">
                Bán hàng chuyên nghiệp
              </h1>
              <h2 className="text-xl font-normal pb-5 text-gray-500">
                Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với
                Shopee - Kênh Người bán
              </h2>
            </div>
            <div></div>
            <div>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9019759f347a781f.png"
                alt="Seller"
                className="w-96 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div>
        <My_Footer />
      </div>
    </>
  );
};

export default SellerScreen;
