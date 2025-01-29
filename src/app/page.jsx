'use client'; // This is a client component 👈🏽

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import * as Unicons from '@iconscout/react-unicons';

import About from './component/About';
import Services from './component/Services';
import Wrapper from './component/Wrapper';

import './assets/css/tailwind.css';
import './assets/scss/tailwind.scss';

import './assets/scss/icons.scss';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Pricing from './component/Pricing';
import Switcher from './component/Switcher';
import Review from './component/Testimonial';

function HomePage() {
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setScroll(window.scrollY > 50);
            });
        }
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenu(!isOpen);
    };

    return (
        <>
            <Wrapper>
                <div>
                    <nav className={`${scroll ? 'is-sticky' : ''} navbar`} id="navbar">
                        <div className="container flex flex-wrap items-center justify-end">
                            <Link className="navbar-brand" href="index.html">
                                <span className="inline-block dark:hidden">
                                    <Image
                                        src="/images/logo-dark.png"
                                        className="inline-block dark:hidden"
                                        alt=""
                                        width="100"
                                        height={10}
                                    />
                                </span>
                                <Image
                                    src="/images/logo-light.png"
                                    className="hidden dark:inline-block"
                                    alt=""
                                    height={10}
                                    width="100"
                                />
                            </Link>

                            <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                                <ul className="list-none menu-social mb-0">
                                    <li className="inline ms-1">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-icon p-1.5  rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white"
                                        >
                                            <Unicons.UilGithub />
                                        </Link>
                                    </li>
                                    <li className="inline ms-1">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-icon  p-1.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white"
                                        >
                                            <Unicons.UilTwitter />
                                        </Link>
                                    </li>
                                    <li className="inline ms-1">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-icon p-1.5  rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white"
                                        >
                                            <Unicons.UilTwitter />
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Navigation Menu</span>
                                    <i className="mdi mdi-menu mdi-24px"></i>
                                </button>
                            </div>

                            <div
                                className={`${
                                    isOpen === true ? 'hidden' : 'block'
                                } navigation lg_992:order-1 lg_992:flex`}
                                id="menu-collapse"
                            >
                                <ul className="navbar-nav" id="navbar-navlist">
                                    <Link
                                        className="nav-item"
                                        to="home"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Home</span>
                                    </Link>
                                    <Link
                                        className="nav-item"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        to="about"
                                    >
                                        <span className="nav-link">About us</span>
                                    </Link>
                                    <Link
                                        className="nav-item"
                                        to="features"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Services</span>
                                    </Link>
                                    {/* <Link
                                        className="nav-item"
                                        to="portfolio"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Portfolio</span>
                                    </Link> */}
                                    <Link
                                        className="nav-item"
                                        to="testi"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Review</span>
                                    </Link>
                                    <Link
                                        className="nav-item"
                                        to="pricing"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Pricing</span>
                                    </Link>
                                    <Link
                                        className="nav-item"
                                        to="blog"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Blog</span>
                                    </Link>
                                    <Link
                                        className="nav-item"
                                        to="contact"
                                        activeclassname="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <span className="nav-link">Contact us</span>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section
                        className="py-36 md:h-auto md:py-0 flex items-center relative bg-[rgb(59_130_246/0.05)] dark:bg-[rgb(59_130_246/0.1)]"
                        id="home"
                    >
                        <div className="container relative">
                            <div className="grid grid-cols-1 text-center mt-0 md:mt-12 pt-0 md:pt-12">
                                <div className="mt-28">
                                    <div>
                                        <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                                            Simplify Your Restaurant Management
                                        </h4>

                                        <p className="text-slate-600 dark:text-white/70 opacity-50 mb-0 max-w-2xl text-lg mx-auto">
                                            Effortlessly manage orders, inventory, and staff with an
                                            all-in-one platform designed to streamline your
                                            restaurant operations and boost efficiency. 🚀
                                        </p>

                                        <div className="relative mt-10">
                                            <Link
                                                to="#"
                                                className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                                            >
                                                Start Free Trail !
                                            </Link>
                                        </div>
                                    </div>
                                    <Image
                                        src="/images/bg/laptop.png"
                                        alt=""
                                        width={1200}
                                        height={700}
                                        className="relative mt-16"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About section */}
                    <About />

                    {/* Service section */}
                    <Services />

                    {/* Portfolio section */}
                    {/* <Portfolio /> */}

                    {/* Review section */}
                    <Review />

                    {/* Pricing section */}
                    <Pricing />

                    {/* Blog section */}
                    <Blog />

                    {/* Contact section */}
                    <Contact />

                    {/* Footer section */}
                    <Footer />

                    {/* Switcher section */}
                    <Switcher />
                </div>
            </Wrapper>
        </>
    );
}

export default HomePage;
