import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';

const Sidebar = () => {
    const [isComponentsOpen, setComponentsOpen] = useState(false);
    const [isFormsOpen, setFormsOpen] = useState(false);
    const [isTablesOpen, setTablesOpen] = useState(false);
    const [isChartsOpen, setChartsOpen] = useState(false);
    const [isIconsOpen, setIconsOpen] = useState(false);

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/index">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link collapsed"
                        onClick={() => setComponentsOpen(!isComponentsOpen)}
                    >
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Sản Phẩm</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul className={`nav-content collapse ${isComponentsOpen ? 'show' : ''}`}>
                        {['Alerts' ].map(item => (
                            <li key={item}>
                                <Link to={`components-${item.toLowerCase()}`}>
                                    <i className="bi bi-circle"></i>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link collapsed"
                        onClick={() => setFormsOpen(!isFormsOpen)}
                    >
                        <i className="bi bi-journal-text"></i>
                        <span>Đơn hàng</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul className={`nav-content collapse ${isFormsOpen ? 'show' : ''}`}>
                        {['Đơn đặt hàng', 'Quản lý vận chuyển', 'Quản lý đánh giá'].map(item => (
                            <li key={item}>
                                <Link to={`forms-${item.toLowerCase().replace(/\s/g, '-')}`}>
                                    <i className="bi bi-circle"></i>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link collapsed"
                        onClick={() => setTablesOpen(!isTablesOpen)}
                    >
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Tables</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul className={`nav-content collapse ${isTablesOpen ? 'show' : ''}`}>
                        {['General Tables', 'Data Tables'].map(item => (
                            <li key={item}>
                                <Link to={`tables-${item.toLowerCase().replace(/\s/g, '-')}`}>
                                    <i className="bi bi-circle"></i>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link collapsed"
                        onClick={() => setChartsOpen(!isChartsOpen)}
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul className={`nav-content collapse ${isChartsOpen ? 'show' : ''}`}>
                        {['Chart.js', 'ApexCharts', 'ECharts'].map(item => (
                            <li key={item}>
                                <Link to={`charts-${item.toLowerCase().replace(/\s/g, '-')}`}>
                                    <i className="bi bi-circle"></i>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link collapsed"
                        onClick={() => setIconsOpen(!isIconsOpen)}
                    >
                        <i className="bi bi-gem"></i>
                        <span>Icons</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul className={`nav-content collapse ${isIconsOpen ? 'show' : ''}`}>
                        {['Bootstrap Icons', 'Remix Icons', 'Boxicons'].map(item => (
                            <li key={item}>
                                <Link to={`icons-${item.toLowerCase().replace(/\s/g, '-')}`}>
                                    <i className="bi bi-circle"></i>
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
