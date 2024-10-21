import React from 'react';
import { Nav, Row, Col, Tabs, Tab, Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const CategoryManagement = () => {
  return (
    <Row>
      {/* Sidebar Nav - chiếm 2 cột */}
      <Col md={2}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/">Trang người mua hàng</Nav.Link>
          <Nav.Link href="/ProductManagement">Quản lý sản phẩm</Nav.Link>
          <Nav.Link href="/CategoryManagement">Quản lý thể loại</Nav.Link>
        </Nav>
      </Col>

      {/* Tab Content - chiếm phần còn lại */}
      <Col md={9}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            
          <Form className="form-custom">  {/* Thêm class form-custom */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Mã thể loại</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tên thể loại</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Row>

            <Row className="mb-12">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tên trạng thái</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Row>

            <br />

            {/* Các nút với màu sắc và khoảng cách khác nhau */}
            <div className="button-group">
              <Button variant="primary" className="mr-2 mb-2">
                Submit
              </Button>
              <Button variant="success" className="mr-2 mb-2">
                Save
              </Button>
              <Button variant="danger" className="mr-2 mb-2">
                Delete
              </Button>
              <Button variant="warning" className="mb-2">
                Cancel
              </Button>
            </div>
          </Form>

          </Tab>

          <Tab eventKey="profile" title="Profile">
            <Table  bordered hover size="sm" className="table-custom">
              <thead>
                <tr>
                  <th>Mã thể loại</th>
                  <th>Tên thể loại</th>
                  <th>Tên trạng thái</th>
                </tr>
              </thead>
              
              <tbody>
              
                
                <tr>
                  <td>1</td>
                  <td>Thức ăn</td>
                  <td>Còn hàng</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default CategoryManagement;
