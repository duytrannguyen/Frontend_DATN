import My_Footer from "../../component/My_Footer";
import My_Heading from "../../component/My_Heading";
import { Outlet } from "react-router-dom";
const UserScreen = () => {
  return (
    <>
      <div>
        <My_Heading title="Kênh người dùng" />
      </div>
      <div className="h-[600px] min-h-[50vh] flex bg-[white] bg-no-repeat flex-row bg-[url('https://aglobal.vn/upload/images/7.jpg')]">
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
