import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

const ProductManagement = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleAddNew = () => {
    navigate('/seller/ProductForm'); // Điều hướng đến trang ProductForm
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);

    // Điều hướng đến trang ProductForm với sản phẩm cần chỉnh sửa
    navigate('/seller/ProductForm', { state: { product } });
  };

  return (
    <div className="container-fluid mt-4">
      <br/>
      <br/>
      <h2 className="text-center mb-4">Quản lý sản phẩm</h2>
      <Button variant="success" className="mb-3" onClick={handleAddNew}>
        Thêm sản phẩm mới
      </Button>
      <Card className="p-4">
        <Row>
          <Col>
            <ProductList onEdit={handleEdit} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductManagement;
