import React, { useState } from 'react';
import axios from '../serviceAxios/axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axios.post('/api/auth/login', {
                username,
                password,
            });

            setMessage(response.data);
            setError('');
            // Bạn có thể thêm logic để chuyển hướng đến trang khác sau khi đăng nhập thành công
        } catch (err) {
            if (err.response) {
                setError(err.response.data); // Lấy thông báo lỗi từ phản hồi của server
            } else {
                setError('Đã xảy ra lỗi khi đăng nhập.'); // Lỗi khác
            }
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Đăng Nhập</button>
            </form>
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Login;
