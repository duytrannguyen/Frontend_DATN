import { Layout } from "antd";
function My_Footer() {
  return (
    <>
      <Layout.Footer style={{ textAlign: "center", color: "gray" }}>
        <div className="flex ">
          <div className="flex-1 w-32">
            {" "}
            © 2024 Waggy ( Nguyen-Nhat-Tan ) -  Tất cả các quyền được bảo lưu.
          </div>

          <div className="flex-auto w-64">
            Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam
            Philippines Brazil México Colombia Chile Đài Loan
          </div>
        </div>

        <div className="p-6">Công ty TNHH Waggy</div>
        <div className="p-1">
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.Waggy.vn
          </div>
          <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Nhat Tan</div>
          <div>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Nguyen Nhat Tan</div>
        </div>
      </Layout.Footer>
    </>
  );
}

export default My_Footer;
