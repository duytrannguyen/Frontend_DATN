import My_Footer from "../../component/My_Footer";
import My_Heading from "../../component/My_Heading";
import { Outlet } from "react-router-dom";
const UserScreen = () => {
  return (
    <>
      <div>
        <My_Heading title="Kênh người dùng" />
      </div>
      <div className="h-[600px] min-h-[50vh] flex bg-[#d0011b] bg-no-repeat flex-row bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7rdxf-m0if24rl9hgwb5')]">
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <Outlet />
        </div>
      </div>
      <div>
        <My_Footer />
      </div>
    </>
  );
};

export default UserScreen;
