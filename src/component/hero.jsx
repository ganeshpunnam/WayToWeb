import React, { useState } from 'react';
import { FaAngleDown, FaShoppingCart, FaHome, FaEnvelope, FaUserCircle, FaBars, FaFacebook, FaBehance, FaDribbble, FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa'; // Importing icons from React Icons

const HeaderComponentWithSidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState({
        home: false,
        services: false,
        customerStories: false,
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDropdown = (item) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [item]: !prevState[item],
        }));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="mainContainer" style={{ position: 'fixed', width: '100%', zIndex: '20' }}>
            <div className="header" style={{
                backgroundColor: '#f0f0f0',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', width:'100%' }}>
                   <div style={{display:'flex', alignItems:'center'}}>
                    <FaBars style={{ marginRight: '20px', cursor: 'pointer' }} onClick={toggleSidebar} />
                    <img id="logoImg" alt="Company Logo" style={{
                        width: '260px',
                        height: 'auto',
                        marginRight: '10px',
                    }} src='https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/Logo1.png' />
                    </div>
                    <nav className="nav-menu" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="nav-item" style={{ marginRight: '20px', position: 'relative' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                                <FaHome style={{ marginRight: '5px' }} />
                                Home
                                <FaAngleDown style={{ marginLeft: '5px' }} onClick={() => toggleDropdown('home')} />
                            </a>
                            {dropdownOpen.home && <ul style={{ position: 'absolute', top: '100%', left: '0', backgroundColor: '#f0f0f0', listStyleType: 'none', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 1</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 2</a></li>
                            </ul>}
                        </div>
                        <div className="nav-item" style={{ marginRight: '20px', position: 'relative' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                                <FaUserCircle style={{ marginRight: '5px' }} />
                                Services
                                <FaAngleDown style={{ marginLeft: '5px' }} onClick={() => toggleDropdown('services')} />
                            </a>
                            {dropdownOpen.services && <ul style={{ position: 'absolute', top: '100%', left: '0', backgroundColor: '#f0f0f0', listStyleType: 'none', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 1</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 2</a></li>
                            </ul>}
                        </div>
                        <div className="nav-item" style={{ marginRight: '20px', position: 'relative' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                                <FaEnvelope style={{ marginRight: '5px' }} />
                                Customer Stories
                                <FaAngleDown style={{ marginLeft: '5px' }} onClick={() => toggleDropdown('customerStories')} />
                            </a>
                            {dropdownOpen.customerStories && <ul style={{ position: 'absolute', top: '100%', left: '0', backgroundColor: '#f0f0f0', listStyleType: 'none', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 1</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sub Item 2</a></li>
                            </ul>}
                        </div>
                        <div className="nav-item" style={{ marginRight: '20px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                                <FaEnvelope style={{ marginRight: '5px' }} />
                                Contact
                            </a>
                        </div>
                        <div className="nav-item" style={{ marginRight: '20px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                                <FaShoppingCart style={{ marginRight: '5px' }} />
                                Cart
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="sidebar" style={{
                position: 'fixed',
                top: 0,
                left: isSidebarOpen ? '0' : '-450px',
                width: '450px',
                height: '100%',
                backgroundColor: '#333',
                transition: 'left 0.3s ease',
                zIndex: 1000,
                paddingTop: '50px',
                color: 'white',
                overflowY: 'auto'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px', alignItems: 'center' }}>
                    <h2 style={{ color: 'white' }}>Menu</h2>
                    <FaTimes style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
                </div>
                <div style={{ display: 'flex', columnGap: '20px', paddingTop: '20px' }}>
                    <ul style={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0,
                        color: 'gray'
                    }}>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="https://www.facebook.com" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <FaFacebook style={{ marginRight: '10px' }} />
                                Facebook
                            </a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="https://www.behance.net" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <FaBehance style={{ marginRight: '10px' }} />
                                Behance
                            </a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="https://www.dribbble.com" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <FaDribbble style={{ marginRight: '10px' }} />
                                Dribbble
                            </a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="https://www.instagram.com" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <FaInstagram style={{ marginRight: '10px' }} />
                                Instagram
                            </a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="https://www.youtube.com" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <FaYoutube style={{ marginRight: '10px' }} />
                                YouTube
                            </a>
                        </li>
                    </ul>
                    <ul style={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Homepage</a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Services</a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Service Details</a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Customer Stories</a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>About</a>
                        </li>
                        <li style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div style={{ padding: '15px', borderBottom: '1px solid #555', fontSize: '16px', marginTop: '60px' }}>
                    <p style={{ margin: '0' }}>Get in touch</p>
                    <p style={{ margin: '0' }}>info@liquid.com</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponentWithSidebar;
