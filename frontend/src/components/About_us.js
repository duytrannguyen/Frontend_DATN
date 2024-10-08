// src/components/About.js
import React from 'react';



const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Giới thiệu về Thú Cưng Yêu</h2>
      <p className="about-description">
        Chào mừng bạn đến với cửa hàng thú cưng của chúng tôi! Chúng tôi chuyên cung cấp
        những sản phẩm và dịch vụ tốt nhất cho thú cưng của bạn. Từ thức ăn, phụ kiện,
        đến chăm sóc sức khỏe, chúng tôi có tất cả.
      </p>
      <div className="about-images">
        <img src="images/cat.jpg" alt="Cat" className="about-image" />
        <img src="images/dog.jpg" alt="Dog" className="about-image" />
        <img src="images/bird.jpg" alt="Bird" className="about-image" />
      </div>
    </div>
  );
};

export default About;
