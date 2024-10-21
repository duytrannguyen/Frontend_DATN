import React, { useState } from 'react';
import '../../css/OrderHistory.css';

const OrderHistory = () => {
    const [activeTab, setActiveTab] = useState('all');

    const orders = [
        {
            id: 'HD001',
            product: 'Vòng cổ',
            status: 'Chờ xác nhận',
            price: '182.400 VNĐ',
            quantity: 1,
            orderDate: '01/10/2023',
            imageUrl: 'path/to/image1.jpg', // Đường dẫn ảnh sản phẩm
        },
        {
            id: 'HD002',
            product: 'Thức ăn',
            status: 'Đã giao',
            price: '500.000 VNĐ',
            quantity: 1,
            orderDate: '25/09/2023',
            imageUrl: 'path/to/image2.jpg', // Đường dẫn ảnh sản phẩm
        },
    ];

    const filteredOrders = activeTab === 'all'
        ? orders
        : orders.filter(order => order.status === activeTab);

    return (
        <div className="order-history">
            <h2>Lịch sử giao dịch</h2>
            <div className="tabs">
                <button onClick={() => setActiveTab('all')} className={activeTab === 'all' ? 'active' : ''}>Tất cả</button>
                <button onClick={() => setActiveTab('Chờ xác nhận')} className={activeTab === 'Chờ xác nhận' ? 'active' : ''}>Chờ xác nhận</button>
                <button onClick={() => setActiveTab('Chờ lấy hàng')} className={activeTab === 'Chờ lấy hàng' ? 'active' : ''}>Chờ lấy hàng</button>
                <button onClick={() => setActiveTab('Đang giao')} className={activeTab === 'Đang giao' ? 'active' : ''}>Đang giao</button>
                <button onClick={() => setActiveTab('Đã giao')} className={activeTab === 'Đã giao' ? 'active' : ''}>Đã giao</button>
                <button onClick={() => setActiveTab('Đã hủy')} className={activeTab === 'Đã hủy' ? 'active' : ''}>Đã hủy</button>
            </div>
            <div className="order-list">
                {filteredOrders.length === 0 ? (
                    <p>Không có đơn hàng nào ở trạng thái này.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th>Ngày đặt</th>
                                <th>Trạng thái</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td><img src={order.imageUrl} alt={order.product} className="order-image" /></td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.orderDate}</td>
                                    <td className="order-status" style={{ color: getStatusColor(order.status) }}>{order.status}</td>
                                    <td><button className="view-order-button">Xem chi tiết</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

    function getStatusColor(status) {
        switch (status) {
            case 'Chờ xác nhận':
                return 'orange';
            case 'Chờ lấy hàng':
                return 'purple';
            case 'Đang giao':
                return 'blue';
            case 'Đã giao':
                return 'green';
            case 'Đã hủy':
                return 'red';
            default:
                return 'black';
        }
    }
};

export default OrderHistory;
