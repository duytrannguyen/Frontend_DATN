import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { createProduct, UpdateProduct } from '../../../../services/ProductService';
import { fetchAllCategories } from '../../../../services/categoryServce';

const ProductForm = ({ refreshProducts }) => {
    const location = useLocation(); // Khởi tạo useLocation
    const { product } = location.state || {}; // Lấy sản phẩm từ state

    const [selectedProduct, setSelectedProduct] = useState({ images: [] });  // Sản phẩm được chọn để chỉnh sửa
    const [newProduct, setNewProduct] = useState({ images: [] });
    const [listCategories, setListCategories] = useState([]);
    const navigate = useNavigate(); // Khởi tạo useNavigate

    useEffect(() => {
        const fetchData = async () => {
            await getCategories();
            if (product) {
                setSelectedProduct(product); // Đảm bảo đây chỉ là một phép gán giá trị
                setNewProduct(product); // Cập nhật newProduct với sản phẩm từ state
            } else {
                setNewProduct({ images: [] }); // Khởi tạo newProduct nếu không có sản phẩm
            }
        };

        fetchData();
    }, [product]);

    const getCategories = async () => {
        const res = await fetchAllCategories();
        if (res && res.data) {
            setListCategories(res.data);
        }
    };

    const handleInputChange = (field, value) => {
        setSelectedProduct({ ...selectedProduct, [field]: value });  // Cập nhật giá trị trong selectedProduct
        setNewProduct({ ...newProduct, [field]: value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setNewProduct((prev) => ({
            ...prev,
            images: files,
        }));
    };

    const handleSubmit = async () => {
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

        if (!newProduct.statusName) {
            alert("Trạng thái là bắt buộc.");
            return;
        }
        formData.append("statusName", newProduct.statusName);

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
        if (newProduct.images && newProduct.images.length > 0) {
            newProduct.images.forEach((image) => {
                formData.append("img", image); // Đảm bảo tên này phù hợp với server
            });
        } else {
            alert("Bạn cần thêm ít nhất một hình ảnh.");
            return;
        }

        try {
            if (newProduct.productId) {
                await UpdateProduct(newProduct.productId, formData);
                alert("Cập nhật sản phẩm thành công!");
                navigate("/seller/ProductManagement")
            } else {
                await createProduct(formData);
                alert("Thêm sản phẩm thành công!");
                navigate("/seller/ProductManagement")
            }
            refreshProducts();
            setNewProduct({ images: [] });
            navigate('/seller/ProductManagement', { state: { product } });

        } catch (error) {
            console.error("Lỗi:", error);
        }
    };

    return (
        <div className="container mt-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">{newProduct.productId ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h2>

                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formProductName">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newProduct.productName || ''}
                                    onChange={(e) => handleInputChange('productName', e.target.value)}
                                    placeholder="Nhập tên sản phẩm..."
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formCategory">
                                <Form.Label>Thể loại</Form.Label>
                                <Form.Select
                                    value={newProduct.categoryName || ''}
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
                                    type="number"
                                    value={newProduct.price || ''}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    placeholder="Nhập giá sản phẩm..."
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formMaterial">
                                <Form.Label>Chất liệu</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newProduct.material || ''}
                                    onChange={(e) => handleInputChange('material', e.target.value)}
                                    placeholder="Nhập chất liệu..."
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPlaceProduction">
                                <Form.Label>Nơi sản xuất</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newProduct.placeProduction || ''}
                                    onChange={(e) => handleInputChange('placeProduction', e.target.value)}
                                    placeholder="Nhập nơi sản xuất..."
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formSize">
                                <Form.Label>Kích thước</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newProduct.size || ''}
                                    onChange={(e) => handleInputChange('size', e.target.value)}
                                    placeholder="Nhập kích thước..."
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formQuantity">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newProduct.quantity || ''}
                                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                                    placeholder="Nhập số lượng..."
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPostingDate">
                                <Form.Label>Ngày đăng</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={newProduct.postingDate || ''}
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
                                    value={newProduct.description || ''}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    placeholder="Nhập mô tả sản phẩm..."
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formStatusName">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Select
                                    value={newProduct.statusName || ''}
                                    onChange={(e) => handleInputChange('statusName', e.target.value)}
                                >
                                    <option value="">Chọn trạng thái...</option>
                                    <option value="On">On</option>
                                    <option value="Off">Off</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Hình ảnh</Form.Label>
                                <Form.Control type="file" multiple onChange={handleImageChange} />
                                <Form.Text className="text-muted">
                                    Bạn có thể chọn nhiều hình ảnh cho sản phẩm.
                                </Form.Text>
                            </Form.Group>
                        </Row>

                        <Button variant="primary" onClick={handleSubmit}>
                            {newProduct.productId ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductForm;
