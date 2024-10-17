import My_Footer from "../../component/My_Footer";
import My_Heading from "../../component/My_Heading";
import { Outlet } from "react-router-dom";
import bg from "../../assets/blog-large.jpg";
const SellerScreen = () => {
  return (
    <>
      <div>
        <My_Heading title="Kênh người bán" />
      </div>
      <div
        className="h-[600px] min-h-[50vh] flex bg-white bg-no-repeat flex-row justify-center items-center"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="basis-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <div className="p-10">
              <h1 className="text-3xl font-extrabold text-[white]">
                Bán hàng chuyên nghiệp
              </h1>
              <h2 className="text-xl font-bold pb-20  text-white">
                Quản lý shop của bạn một cách hiệu quả hơn trên Waggy với
                Waggy - Kênh Người bán
              </h2>
            </div>
            <div></div>
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
