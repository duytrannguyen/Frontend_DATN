import React, { useEffect, useState } from 'react';
import { Nav, Row, Col, Tabs, Tab, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const CategoryManagement = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/home/categories/all'); // Thay 'API_URL' bằng URL của bạn
        setCategories(response.data); // Giả định dữ liệu trả về là một mảng
      } catch (error) {
        console.error('Có lỗi xảy ra khi tải dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row>

      {/* Tab Content - chiếm phần còn lại */}
      <Col md={9} className="ml-auto mt-3">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Thông tin">
            
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
            <Form.Label>Thể loại</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Kích hoạt</option>
                    <option>Không kích hoạt</option>
                  </Form.Select>
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
            <th>Mã thể loại</th>
            <th>Tên thể loại</th>
            <th>Tên trạng thái</th>
          </tr>
        </thead>
        
        <tbody>
          {categories.map((category) => (
            <tr key={category.categoryId}>   {/* Giả định mỗi thể loại có thuộc tính 'id' */}
              <td>{category.categoryId}</td>
              <td>{category.categoryName}</td> {/* Giả định mỗi thể loại có thuộc tính 'name' */}
              <td>{category.statusName}</td> {/* Giả định mỗi thể loại có thuộc tính 'status' */}
              <td>
                <Button variant="primary" className="mr-2 mb-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Tab>

        </Tabs>
      </Col>
    </Row>
  );
};

export default CategoryManagement;
