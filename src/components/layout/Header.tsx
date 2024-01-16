'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 90) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}">
            <div className={`header-body border-top-0 ${isSticky ? 'fixed-top' : ""}`}>
                <div className="header-top header-top-default header-top-borders border-bottom-0 bg-color-light"
                    style={{
                        height: isSticky ? '0px' : 'auto',
                        minHeight: isSticky ? '0px' : 'auto',
                        overflow: isSticky ? 'hidden' : '',
                    }}
                >
                    <div className="container h-100">
                        <div className="header-row h-100">
                            <div className="header-column justify-content-between">
                                <div className="header-row">
                                    <nav className="header-nav-top w-100">
                                        <ul className="nav nav-pills justify-content-between w-100 h-100">
                                            <li className="nav-item py-2 d-inline-flex">
                                                <span className="header-top-phone py-2 d-flex align-items-center text-color-secondary font-weight-semibold text-uppercase">
                                                    <span>
                                                        <img width={15} height={18} src="img/demos/business-consulting-2/icons/phone.svg" alt="Phone" />
                                                    </span>
                                                    <Link className="text-color-secondary text-color-hover-primary text-decoration-none" href="tel:123-456-7890">(800) 123-4567</Link>
                                                </span>
                                                <span className="header-top-email px-0 font-weight-normal align-items-center d-none d-xl-flex">
                                                    <span>
                                                        <img width={25} height={18} src="img/demos/business-consulting-2/icons/mail.svg" alt="Mail" />
                                                    </span>
                                                    <Link className="text-color-secondary text-color-hover-primary text-decoration-none" href="mailto:business@portotheme.com">business@portotheme.com</Link>
                                                </span>
                                                <span className="header-top-opening-hours px-0 font-weight-normal align-items-center text-color-secondary d-none d-xl-flex">
                                                    <span>
                                                        <img width={19} height={18} src="img/demos/business-consulting-2/icons/calendar.svg" alt="Calendar" />
                                                    </span>
                                                    Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED
                                                </span>
                                            </li>
                                            <li className="nav-item nav-item-header-top-socials d-none d-md-flex justify-content-between h-100">
                                                <span className="header-top-button-make-as-appoitment d-inline-flex align-items-center justify-content-center h-100 p-0 align-top">
                                                    <Link href="demo-business-consulting-2-contact-us.html" className="btn-primary d-flex align-items-center justify-content-center h-100 w-100 text-color-light font-weight-semibold text-decoration-none text-uppercase custom-button-header-top">free initial consultation</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-container container bg-color-light"
                    style={{
                        height: isSticky ? '70px' : '100px',
                        minHeight: isSticky ? '0px' : '0px',
                    }}
                >
                    <div className="header-row">
                        <div className="header-column header-column-logo">
                            <div className="header-row">
                                <div className="header-logo">
                                    <Link href="demo-business-consulting-2.html">
                                        <img alt="Porto" width={123} height={32} src="img/demos/business-consulting-2/logos/porto.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="header-column header-column-nav-menu justify-content-end">
                            <div className="header-row">
                                <div className="header-nav header-nav-links order-2 order-lg-1">
                                    <div className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                        <nav className={`${toggle ? 'show' : 'collapse'}`}>
                                            <ul className="nav nav-pills" id="mainNav">
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2.html">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2-about-us.html">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2-services.html">
                                                        Services
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link active" href="demo-business-consulting-2-cases.html">
                                                        Cases
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2-team.html">
                                                        Team
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2-blog.html">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li className="dropdown-secondary">
                                                    <Link className="nav-link" href="demo-business-consulting-2-contact-us.html">
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <button onClick={() => setToggle(!toggle)} className="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                                        <i className="fas fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-column header-column-search justify-content-center align-items-end">
                            <div className="header-nav-features">
                                <div className="header-nav-feature header-nav-features-search d-inline-flex">
                                    <Link href="#" className="header-nav-features-toggle" data-focus="headerSearch">
                                        <i className="fas fa-search header-nav-top-icon text-color-secondary text-3" />
                                    </Link>
                                    <div className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0" id="headerTopSearchDropdown">
                                        <form role="search" action="page-search-results.html" method="get">
                                            <div className="simple-search input-group">
                                                <input className="form-control text-1" id="headerSearch" name="q" type="search" placeholder="Search..." />
                                                <button className="btn" type="submit" aria-label="Search">
                                                    <i className="fa fa-search header-nav-top-icon text-color-secondary" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header