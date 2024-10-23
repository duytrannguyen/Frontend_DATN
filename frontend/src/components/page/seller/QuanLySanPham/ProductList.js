import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../../../constant/APIConstant';
import instance from "../../../../service/axios";
import { deleteProduct } from '../../../../services/ProductService';

const ProductList = () => {
    const [listProduct, setListProduct] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Số lượng sản phẩm hiển thị mỗi trang
    // const token = localStorage.getItem(TOKEN);
    // Tính toán tổng số trang
    const pageCount = Math.ceil(listProduct.length / itemsPerPage);

    // Xử lý sự kiện thay đổi trang
    const handlePageClick = (event) => {
        const newPage = event.selected;
        setCurrentPage(newPage);
    };

    // Cắt danh sách sản phẩm dựa trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentItems = listProduct.slice(offset, offset + itemsPerPage);
    const getProduct = async () => {
        try {
            const token = localStorage.getItem(TOKEN);
            console.log("Token SP:", token);

            // Kiểm tra token có tồn tại không
            if (!token) {
                console.error("Token not found");
                return; // Không thực hiện yêu cầu nếu token không có
            }

            // Gửi yêu cầu đến API với token
            const response = await instance.get('/api/seller/products/list', {
                headers: {
                    Authorization: `Bearer ${token}`, // Thêm khoảng trắng giữa 'Bearer' và token
                },
            });

            console.log("List sản phẩm:", response); // Kiểm tra dữ liệu trả về

            if (response && response.data) {
                setListProduct(response.data.content || []); // Sử dụng res.content nếu API trả về cấu trúc này
            } else {
                setListProduct([]); // Nếu không có content, thiết lập là mảng rỗng
            }
        } catch (error) {
            console.error("Error in getProduct:", error);
        }
    };





    useEffect(() => {
        getProduct();
    }, []);

    const handleDelete = (product) => {
        setCurrentProduct(product);
        setShowDeleteModal(true);
    };

    const navigate = useNavigate();

    const handleEdit = (product) => {
        setSelectedProduct(product); // Cập nhật sản phẩm được chọn
        navigate('/seller/ProductForm', { state: { product } }); // Điều hướng đến ProductForm
    };

    const confirmDelete = async () => {
        if (!currentProduct) return;

        try {
            const result = await deleteProduct(currentProduct.productId);
            // console.log("xoá")
            if (result.success) {
                alert('Xóa sản phẩm thành công!');
                window.location.reload(); // Tải lại trang hiện tại
            }
            setShowDeleteModal(false);
        } catch (error) {
            alert('Xóa sản phẩm thất bại.');
        }
    };


    return (
        <>
            <Row>
                <div className="table-responsive">
                    <Table bordered hover size="sm" className="table-custom text-center">
                        <thead className="table-light">
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
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentItems && currentItems.length > 0 ? (
                                currentItems.map((product, index) => (
                                    <tr key={product.product_id}>
                                        <td>{offset + index + 1}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.categoryName}</td>
                                        <td>{product.price}</td>
                                        <td>{product.material}</td>
                                        <td>{product.placeProduction}</td>
                                        <td>{product.size}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.postingDate}</td>
                                        <td>{product.statusName}</td>
                                        <td>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                className="me-2"
                                                onClick={() => handleEdit(product)}
                                            >
                                                <PencilSquare />
                                            </Button>

                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => handleDelete(product)}
                                            >
                                                <Trash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11">Không có sản phẩm nào</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này không?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                            Hủy
                        </Button>
                        <Button variant="danger" onClick={confirmDelete}>
                            Xóa
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Phân trang */}
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <ReactPaginate
                            previousLabel={"Trước"}
                            nextLabel={"Sau"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                        />
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export default ProductList;
