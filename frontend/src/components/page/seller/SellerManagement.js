import React, { useState } from 'react';
import '../../css/SellerManagement.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SellerManagement = () => {
    const [sellers] = useState([
        {
            id: '1',
            name: 'Mendocart',
            email: 'mendocart@gmail.com',
            products: 120,
            totalSell: 1150,
            status: 'Active',
            joinDate: '19/09/2022',
        },
        {
            id: '2',
            name: 'Margaret Ak',
            email: 'margaretak@gmail.com',
            products: 99,
            totalSell: 1998,
            status: 'Active',
            joinDate: '25/02/2022',
        },
        {
            id: '3',
            name: 'Samantha',
            email: 'samantha@gmail.com',
            products: 125,
            totalSell: 1500,
            status: 'Inactive',
            joinDate: '12/05/2020',
        },
    ]);

    return (
        <main id="main" className="main">
            <section className="section seller-management">
                <div className="container">
                    <h2>Quản lý Seller</h2>
                    <div className="search-container">
                        <input type="text" placeholder="Tìm kiếm..." className="search-input" />
                        <button className="search-button">Tìm kiếm</button>
                    </div>
                    <div className="card">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Hồ sơ</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Sản phẩm</th>
                                    <th>Tổng doanh thu</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tham gia</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellers.map(seller => (
                                    <tr key={seller.id}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>{seller.products}</td>
                                        <td>{seller.totalSell}</td>
                                        <td className={`status ${seller.status.toLowerCase()}`}>{seller.status}</td>
                                        <td>{seller.joinDate}</td>
                                        <td>
                                            <button className="btn-edit">Chỉnh sửa</button>
                                            <button className="btn-toggle">{seller.status === 'Active' ? 'Khóa' : 'Kích hoạt'}</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SellerManagement;
