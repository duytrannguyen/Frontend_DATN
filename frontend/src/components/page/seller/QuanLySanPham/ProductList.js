import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Row, Col } from 'react-bootstrap';
import { fetchAllProduct, deleteProduct } from '../service/ProductService';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ProductList = () => {
    const [listProduct, setListProduct] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Số lượng sản phẩm hiển thị mỗi trang

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
        let res = await fetchAllProduct();
        console.log("list sp ", res.data);
        if (res && res.data) {
            setListProduct(res.data);
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
            if (result.success) {
                alert('Xóa sản phẩm thành công!');
                getProduct();  // Cập nhật lại danh sách sản phẩm sau khi xóa
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
