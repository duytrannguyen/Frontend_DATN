import React from "react";
import { Nav, Row, Col, Tabs, Tab, Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../../css/UserManagement.css";

const UserManagement = () => {
  return (
    <Row>
  {/* Tab Content - chiếm phần còn lại */}
  <Col md={9} className="ml-auto mt-3">
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Danh sách">
        <Table bordered hover size="sm" className="table-custom">
          <thead>
            <tr className="userProfile">
              <th>Mã Người dùng</th>
              <th>Hình ảnh</th>
              <th>Tên đăng nhập</th>
              <th>Họ tên người dùng</th>
              <th>Mật Khẩu</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
          <tr className="userProfile">
              <td>1</td>
              <td></td>
              <td>DiDi</td>
              <td>Phạm Thị Bích Di</td>
              <td>1234</td>
              <td>29/09/2004</td>
              <td>Nữ</td>
              <td>phamdi@gmail.com</td>
              <td>0987654321</td>
              <td>User</td>
              <td>Hoạt động</td>
             
              <td> <Button variant="primary" className="mr-2 mb-2">
              <i class="bi bi-pencil-square"></i>
            </Button></td>
            </tr>
          </tbody>
        </Table>
      </Tab>
      
      <Tab eventKey="profile" title="Thông tin">
        {/* Form phần Profile */}
        <Form className="form-custom">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mã người dùng</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Họ tên người dùng</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Row>

        
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
  <Form.Label>Giới tính</Form.Label>
  <div>
    <Form.Check 
      type="radio" 
      label="Nam" 
      name="gender" 
      id="genderMale" 
      value="male" 
      inline
    />
    <Form.Check 
      type="radio" 
      label="Nữ" 
      name="gender" 
      id="genderFemale" 
      value="female" 
      inline
    />
  </div>
</Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Vai trò</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Trạng thái</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridImage">
  <Form.Label>Hình ảnh</Form.Label>
  <Form.Control type="file" accept="image/*" />
</Form.Group>

          </Row>
          
          

          <br />

          <div className="button-group">
            <Button variant="success" className="mr-2 mb-2">
              Cập nhật
            </Button>
          </div>
        </Form>
      </Tab>
    </Tabs>
  </Col>
</Row>

  );
};

export default UserManagement;
