import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import './style.css'; // Đường dẫn đến tệp CSS của bạn
import axios from '../serviceAxios/axios';

const ProductDetail = () => {
    const { productId } = useParams(); // Lấy ID sản phẩm từ URL
    const [product, setProduct] = useState(null);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState([]); // Danh sách sản phẩm mới nhất

    // Hàm để tăng giảm số lượng
    const incrementValue = () => setQuantity(quantity + 1);
    const decrementValue = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Lấy dữ liệu sản phẩm từ API
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log(productId)
                const response = await axios.get(`/api/home/products/${productId}`); // Sửa lại đường dẫn API với backticks
                setProduct(response.data);
            } catch (error) {
                console.error("Có lỗi xảy ra khi lấy sản phẩm:", error);
            }
        };

        fetchProduct();
    }, [productId]); // Sửa ở đây

    // Lấy danh sách sản phẩm mới nhất
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/home/products/postingDate'); // Cập nhật đường dẫn API nếu cần
                setProducts(response.data);
            } catch (error) {
                console.error("Có lỗi xảy ra khi lấy danh sách sản phẩm:", error);
            }
        };

        fetchProducts();
    }, []);

    if (!product) return <p>Đang tải...</p>; // Hiển thị khi đang tải

    const discountedPrice = product.price - (product.price * (product.percentDecrease / 100)); // Tính giá giảm

    return (
        <div>
            <header>
                {/* Thay thế phần header */}
                {/* <HeaderComponent /> */}
            </header>

            <div className="page-heading normal-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 style={{ textAlign: 'center' }}>Chi tiết sản phẩm</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-5">
                                <img
                                    src={product.imageUrl} // Sử dụng thuộc tính imageUrl
                                    className="card-img-top"
                                    style={{ width: '300px', marginLeft: '100px' }}
                                    alt={product.productName} // Thay đổi alt để hiển thị tên sản phẩm
                                />
                            </div>
                            <div className="col-md-7">
                                <h2><b>{product.productName}</b></h2>
                                <br />
                                <p>
                                    Nhà cung cấp: <b>{product.sellerName}</b><br />
                                    Nhà sản xuất: <b>{product.placeProduction}</b><br />
                                    Kích thước: <b>{product.size}</b><br />
                                    Năm sản xuất: <b>{product.yearManufacture}</b><br />
                                    Mô tả: <b>{product.description}</b>
                                </p>
                                <br />
                                <p className="giaBan">
                                    <strong style={{ color: 'red' }}>{discountedPrice} VNĐ</strong>
                                </p>

                                <p className="giamGia">
                                    <span>{product.price} VNĐ</span>
                                    <span className="badge text-bg-danger">
                                        - <b className="badge text-bg-danger">{product.percentDecrease}</b>%
                                    </span>
                                </p>

                                <hr />
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-secondary btn-sm" onClick={decrementValue}>-</button>
                                    <input
                                        className="form-control mx-2"
                                        value={quantity}
                                        style={{ width: '40px', textAlign: 'center' }}
                                        readOnly
                                    />
                                    <button className="btn btn-secondary btn-sm" onClick={incrementValue}>+</button>
                                </div>

                                <Link to={`/home/products/details/cart/${product.productId}`}>
                                    <button type="button" className="btn btn-outline-primary btnn">
                                        <i className="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ Hàng
                                    </button>
                                </Link>
                                <Link to={`/products/details/cart/paynow/${product.productId}`} className="btn btn-primary btnn">
                                    Mua Ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginTop: '10px' }}>
                    <h5>THÔNG TIN SẢN PHẨM</h5>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <p>Nhà Cung Cấp:</p>
                                <p>Nhà Xuất Bản:</p>
                                <p>Tác Giả:</p>
                                <p>Năm Xuất Bản:</p>
                                <p>Ngôn Ngữ:</p>
                                <p>Trọng Lượng:</p>
                                <p>Kích Thước:</p>
                                <p>Số Trang:</p>
                            </div>
                            <div className="col-md-9">
                                <p>{product.sellerName}</p>
                                <p>{product.placeProduction}</p>
                                <p>{product.author}</p>
                                <p>{product.yearManufacture}</p>
                                <p>{product.language}</p>
                                <p>{product.weight}</p>
                                <p>{product.size}</p>
                                <p>{product.numberOfPages}</p>
                            </div>
                        </div>

                        <p>Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tùy vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...</p>
                        <hr />
                        <p className={showMoreInfo ? '' : 'd-none'} id="extraListMota">
                            <strong>{product.productName}</strong>
                            <h6>GIỚI THIỆU TÁC PHẨM</h6>
                            <p>{product.description}</p>
                        </p>

                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            style={{ marginLeft: '550px' }}
                            onClick={() => setShowMoreInfo(!showMoreInfo)}
                        >
                            {showMoreInfo ? 'Thu Gọn' : 'Xem Thêm Thông Tin'}
                        </button>
                    </div>
                </div>

                <br />
                <div className="card">
                    <h5>SẢN PHẨM MỚI NHẤT</h5>
                    <div className="col-md-12">
                        <div className="row">
                            {products.map((p) => (
                                <div key={p.productId} className="col-md-3 g-4">
                                    <Link to={`/home/products/details/${p.productId}`}>
                                        <div className="card a-product">
                                            <img
                                                src={p.imageUrl} // Sử dụng thuộc tính imageUrl
                                                className="card-img-top"
                                                style={{ height: '230px', width: '210px', marginLeft: '18px' }}
                                            />
                                            <div className="card-body">
                                                <h4 className="card-title">{p.productName}</h4>
                                                <p>{p.author}</p>
                                                <div className="d-flex flex-column">
                                                    <h5 style={{ color: 'red', fontWeight: '700' }}>
                                                        {p.priceDecreased} VNĐ
                                                    </h5>
                                                </div>
                                                <p className="giamGia">
                                                    <span>{p.price} VNĐ</span>
                                                    <span className="badge text-bg-danger">
                                                        - <b className="badge text-bg-danger">{p.percentDecrease}</b>%
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                {/* Thay thế phần footer */}
                {/* <FooterComponent /> */}
            </footer>
        </div>
    );
};

export default ProductDetail;
