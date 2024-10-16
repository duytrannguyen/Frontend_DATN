import React from 'react';
import { Dropdown } from 'react-bootstrap'; // Đảm bảo đã cài đặt react-bootstrap
import './css/style.css';

const Dashboard = () => {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">
                    {/* Left side columns */}
                    <div className="col-lg-12">
                        <div className="row">
                            {/* Sales Card */}
                            <Card
                                title="Sales"
                                subtitle="Today"
                                icon="bi-cart"
                                value={145}
                                percentage={12}
                                isIncrease={true}
                            />

                            {/* Revenue Card */}
                            <Card
                                title="Revenue"
                                subtitle="This Month"
                                icon="bi-currency-dollar"
                                value={3264}
                                percentage={8}
                                isIncrease={true}
                            />

                            {/* Customers Card */}
                            <Card
                                title="Customers"
                                subtitle="This Year"
                                icon="bi-people"
                                value={1244}
                                percentage={12}
                                isIncrease={false}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

const Card = ({ title, subtitle, icon, value, percentage, isIncrease }) => {
    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card">
                <div className="filter">
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="icon">
                            <i className="bi bi-three-dots"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Header className="text-start"><h6>Filter</h6></Dropdown.Header>
                            <Dropdown.Item href="#">Today</Dropdown.Item>
                            <Dropdown.Item href="#">This Month</Dropdown.Item>
                            <Dropdown.Item href="#">This Year</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{title} <span>| {subtitle}</span></h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={icon}></i>
                        </div>
                        <div className="ps-3">
                            <h6>{value}</h6>
                            <span className={`text-${isIncrease ? 'success' : 'danger'} small pt-1 fw-bold`}>
                                {isIncrease ? '+' : '-'}{percentage}%
                            </span>
                            <span className="text-muted small pt-2 ps-1">
                                {isIncrease ? 'increase' : 'decrease'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
