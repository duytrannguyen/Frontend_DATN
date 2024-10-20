import { Outlet } from "react-router-dom";
import MyFooter from "../../component/MyFooter";
import MyHeading from "../../component/MyHeading";
const UserScreen = () => {
  return (
    <>
      <div>
        <MyHeading title="Kênh người dùng" />
      </div>
      <div className="h-[600px] min-h-[50vh] flex bg-white bg-no-repeat flex-row justify-center items-center bg-[url('https://img.websosanh.vn/v10/users/review/images/2h4j2gk4kf53h/meo-co-duoc-an-thuc-an-cho-cho-khong.jpg?compress=85')]">
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <Outlet />
        </div>
      </div>
      <div>
        <MyFooter />
      </div>
    </>
  );
};

export default UserScreen;
