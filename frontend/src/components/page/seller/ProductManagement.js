import React from "react";
import { Nav, Row, Col, Tabs, Tab, Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const ProductManagement = () => {
  return (
    <Row>

      {/* Tab Content - chiếm phần còn lại */}
      <Col md={9} className="ml-auto mt-3">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Thông tin">
            <Form className="form-custom">
              {" "}
              {/* Thêm class form-custom */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Mã sản phẩm</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Thể loại</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Giá</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Chất liệu</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Nơi sản xuất</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Kích thước</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Ngày đăng</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="mb-12">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>
              <br />
              {/* Các nút với màu sắc và khoảng cách khác nhau */}
              <div className="button-group">
                <Button variant="primary" className="mr-2 mb-2">
                  Thêm
                </Button>
                <Button variant="success" className="mr-2 mb-2">
                  Cập nhật
                </Button>
                <Button variant="danger" className="mr-2 mb-2">
                  Xóa
                </Button>
                <Button variant="warning" className="mb-2">
                  Làm mới
                </Button>
              </div>
            </Form>
          </Tab>

          <Tab eventKey="profile" title="Danh sách">
            <Table bordered hover size="sm" className="table-custom">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Thể loại</th>
                  <th>Giá</th>
                  <th>Chất liệu</th>
                  <th>Nơi sản xuất</th>
                  <th>Kích thước</th>
                  <th>Số lượng</th>
                  <th>Ngày đăng</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Thức ăn cho mèo</td>
                  <td>Thức ăn</td>
                  <td>150000</td>
                  <td>Khum bt</td>
                  <td>Việt Nam</td>
                  <td>1kg</td>
                  <td>200</td>
                  <td>15/10/2024</td>
                  <td> <Button variant="primary" className="mr-2 mb-2">
              <i class="bi bi-pencil-square"></i>
            </Button></td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProductManagement;
