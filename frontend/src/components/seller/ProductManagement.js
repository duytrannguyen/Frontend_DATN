import React, { useEffect, useState } from 'react';
import { Nav, Row, Col, Tabs, Tab, Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchAllProduct, createProduct } from '../service/ProductService';  // Giả sử bạn đã có service để lấy sản phẩm
import { fetchAllCategories } from '../service/categoryServce';
const ProductManagement = () => {
  const [listProduct, setListProduct] = useState([]);  // Danh sách sản phẩm
  const [listCategories, setListCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({ images: [] });  // Sản phẩm được chọn để chỉnh sửa
  const [newProduct, setNewProduct] = useState({ images: [] }); // State cho sản phẩm mới
  const [activeTab, setActiveTab] = useState('home');  // Tab hiện tại
  useEffect(() => {
    getProduct();
    getcategories();
  }, []);

  const getProduct = async () => {
    let res = await fetchAllProduct();  // Giả sử fetchAllProduct trả về danh sách sản phẩm
    if (res && res.data) {
      setListProduct(res.data);  // Cập nhật danh sách sản phẩm vào state
    }
  };

  const getcategories = async () => {
    let res = await fetchAllCategories();
    if (res && res.data) {
      setListCategories(res.data);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);  // Đặt sản phẩm được chọn vào state
    setNewProduct(product); // Đồng bộ dữ liệu cho việc chỉnh sửa
    setActiveTab('home');  // Chuyển sang tab form
  };

  const handleInputChange = (field, value) => {
    setSelectedProduct({ ...selectedProduct, [field]: value });  // Cập nhật giá trị trong selectedProduct
    setNewProduct({ ...newProduct, [field]: value }); // Cập nhật giá trị trong newProduct

  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedProduct({
      ...selectedProduct,
      images: files
    });
  };
  // Thêm sản phẩm
  const handleAddProduct = async () => {
    const formData = new FormData();

    // Kiểm tra và thêm các trường cần thiết vào formData
    if (!newProduct.productName) {
      alert("Tên sản phẩm là bắt buộc.");
      return;
    }
    formData.append("productName", newProduct.productName);

    if (!newProduct.price || newProduct.price <= 0) {
      alert("Giá sản phẩm phải lớn hơn 0.");
      return;
    }
    formData.append("price", newProduct.price);

    if (newProduct.size) {
      formData.append("size", newProduct.size);
    }

    if (newProduct.material) {
      formData.append("material", newProduct.material);
    }

    if (newProduct.description) {
      formData.append("description", newProduct.description);
    }

    if (newProduct.placeProduction) {
      formData.append("placeProduction", newProduct.placeProduction);
    }

    if (!newProduct.quantity || newProduct.quantity <= 0) {
      alert("Số lượng phải lớn hơn 0.");
      return;
    }
    formData.append("quantity", newProduct.quantity);

    if (!newProduct.categoryName) {
      alert("Tên danh mục là bắt buộc.");
      return;
    }
    formData.append("categoryName", newProduct.categoryName);

    if (!newProduct.postingDate) {
      alert("Ngày đăng bán là bắt buộc.");
      return;
    }
    if (newProduct.postingDate) {
      const postingDate = new Date(newProduct.postingDate);
      const formattedDate = postingDate.toISOString().split('T')[0]; // Định dạng thành yyyy-MM-dd
      formData.append("postingDate", formattedDate);
  }

    // Thêm hình ảnh vào formData nếu có
    // if (newProduct.images && newProduct.images.length > 0) {
    //   newProduct.images.forEach((image) => {
    //     formData.append("img", image); // Sử dụng "img" cho trường hình ảnh
    //   });
    // } else {
    //   alert("Bạn cần thêm ít nhất một hình ảnh.");
    //   return;
    // }
    if (selectedImage) {
      formData.append("img", selectedImage); // selectedImage là tệp hình ảnh bạn chọn
  }


    // Gọi API để tạo sản phẩm mới
    try {
      await createProduct(formData); // Gọi API tạo sản phẩm
      alert("Thêm sản phẩm thành công!");
      setNewProduct({ images: [] }); // Reset lại state
      getProduct(); // Lấy lại danh sách sản phẩm
    } catch (error) {
      console.error("Có lỗi xảy ra khi thêm sản phẩm:", error);
      alert("Có lỗi xảy ra khi thêm sản phẩm: " + error.response?.data || error.message);
    }
  };

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
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
          <Tab eventKey="home" title="Home">
          <Form className="form-custom">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formProductName">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedProduct?.productName || ''} // Sử dụng toán tử nullish
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formCategory">
                  <Form.Label>Thể loại</Form.Label>
                  <Form.Select
                    value={selectedProduct?.categoryName || ''} // Sử dụng toán tử nullish
                    onChange={(e) => handleInputChange('categoryName', e.target.value)}
                  >
                    <option value="">Chọn thể loại...</option>
                    {listCategories.length > 0 ? (
                      listCategories.map((category) => (
                        <option key={category.categoryId} value={category.categoryName}>
                          {category.categoryName}
                        </option>
                      ))
                    ) : (
                      <option disabled>Không có thể loại nào</option>
                    )}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formPrice">
                  <Form.Label>Giá</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedProduct?.price || ''}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formMaterial">
                  <Form.Label>Chất liệu</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedProduct?.material || ''}
                    onChange={(e) => handleInputChange('material', e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formPlaceProduction">
                  <Form.Label>Nơi sản xuất</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedProduct?.placeProduction || ''}
                    onChange={(e) => handleInputChange('placeProduction', e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formSize">
                  <Form.Label>Kích thước</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedProduct?.size || ''}
                    onChange={(e) => handleInputChange('size', e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formQuantity">
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedProduct?.quantity || ''}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formPostingDate">
                  <Form.Label>Ngày đăng</Form.Label>
                  <Form.Control
                    type="date"
                    value={selectedProduct?.postingDate || ''}
                    onChange={(e) => handleInputChange('postingDate', e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formDescription">
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={selectedProduct?.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formImages">
                  <Form.Label>Hình ảnh</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={handleImageChange}
                  />
                </Form.Group>
              </Row>
              {/* Hiển thị hình ảnh hiện tại nếu có */}
              {selectedProduct.imageUrl && (
                <div>
                  <h6>Hình ảnh hiện tại:</h6>
                  <img src={selectedProduct.imageUrl} alt="current" style={{ width: '100px', margin: '5px' }} />
                </div>
              )}

              {selectedProduct.images && selectedProduct.images.length > 0 && (
                <div>
                  <h6>Hình ảnh đã chọn:</h6>
                  <div className="image-preview">
                    {selectedProduct.images.map((image, index) => (
                      <img key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} style={{ width: '100px', margin: '5px' }} />
                    ))}
                  </div>
                </div>
              )}

              <br />

              <div className="button-group">
                <Button variant="primary" onClick={handleAddProduct} className="mr-2 mb-2">
                  Submit
                </Button>
                <Button variant="success" className="mr-2 mb-2">
                  Update
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
            <Table bordered hover size="sm" className="table-custom">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Thể loại</th>
                  <th>Giá</th>
                  <th>Chất liệu</th>
                  <th>Nơi sản xuất</th>
                  <th>Kích thước</th>
                  <th>Số lượng</th>
                  <th>Ngày đăng</th>
                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                {listProduct && listProduct.length > 0 ? (
                  listProduct.map((product, index) => (
                    <tr key={product.product_id}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.categoryName}</td>
                      <td>{product.price}</td>
                      <td>{product.material}</td>
                      <td>{product.placeProduction}</td>
                      <td>{product.size}</td>
                      <td>{product.quantity}</td>
                      <td>{product.postingDate}</td>
                      <td>
                        <Button variant="info" onClick={() => handleEdit(product)}>
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">Không có sản phẩm nào</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProductManagement;
