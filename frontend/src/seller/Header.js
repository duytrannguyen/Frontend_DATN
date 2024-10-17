import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Nhập Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './css/style.css';

const Headerss = () => {
    const [notifications] = useState([
        { id: 1, title: 'Lorem Ipsum', description: 'Quae dolorem earum veritatis oditseno', time: '30 min. ago', type: 'warning' },
        { id: 2, title: 'Atque rerum nesciunt', description: 'Quae dolorem earum veritatis oditseno', time: '1 hr. ago', type: 'danger' },
        { id: 3, title: 'Sit rerum fuga', description: 'Quae dolorem earum veritatis oditseno', time: '2 hrs. ago', type: 'success' },
        { id: 4, title: 'Dicta reprehenderit', description: 'Quae dolorem earum veritatis oditseno', time: '4 hrs. ago', type: 'primary' },
    ]);

    const [messages] = useState([
        { id: 1, name: 'Maria Hudson', description: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '4 hrs. ago', img: 'assets/img/messages-1.jpg' },
        { id: 2, name: 'Anna Nelson', description: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '6 hrs. ago', img: 'assets/img/messages-2.jpg' },
        { id: 3, name: 'David Muldon', description: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '8 hrs. ago', img: 'assets/img/messages-3.jpg' },
    ]);

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">{notifications.length}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have {notifications.length} new notifications
                                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            {notifications.map(notification => (
                                <li className="notification-item" key={notification.id}>
                                    <i className={`bi bi-${notification.type}-circle text-${notification.type}`}></i>
                                    <div>
                                        <h4>{notification.title}</h4>
                                        <p>{notification.description}</p>
                                        <p>{notification.time}</p>
                                    </div>
                                    <li><hr className="dropdown-divider" /></li>
                                </li>
                            ))}
                            <li className="dropdown-footer">
                                <a href="#">Show all notifications</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-chat-left-text"></i>
                            <span className="badge bg-success badge-number">{messages.length}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                You have {messages.length} new messages
                                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            {messages.map(message => (
                                <li className="message-item" key={message.id}>
                                    <a href="#">
                                        <img src={message.img} alt="" className="rounded-circle" />
                                        <div>
                                            <h4>{message.name}</h4>
                                            <p>{message.description}</p>
                                            <p>{message.time}</p>
                                        </div>
                                    </a>
                                    <li><hr className="dropdown-divider" /></li>
                                </li>
                            ))}
                            <li className="dropdown-footer">
                                <a href="#">Show all messages</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown pe-3">
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Kevin Anderson</h6>
                                <span>Web Designer</span>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i className="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                    <i className="bi bi-question-circle"></i>
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Headerss;
