import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {
    return (
        <>
            {/*  Start Footer  */}
            <footer className="py-8 bg-slate-800 dark:bg-gray-900">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center">
                        <div className="md:col-span-3">
                            <div href="#" className="logo-footer">
                                <Image
                                    src={'/images/logo-light.png'}
                                    className="md:ms-0 mx-auto"
                                    alt=""
                                    width={105}
                                    height={24}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-5 md:mt-0 mt-8">
                            <div className="text-center">
                                <p className="text-gray-400">
                                    © {new Date().getFullYear()} KoaCook. Design & Develop with{' '}
                                    <i className="mdi mdi-heart text-[#2563eb]"></i> by{' '}
                                    <a
                                        href="https://jameskaois.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-reset"
                                    >
                                        James Cao
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div
                            className="md:col-span-4 md:mt-0 mt-8"
                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                        >
                            <a
                                href="https://www.producthunt.com/posts/koacook?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-koacook"
                                target="_blank"
                            >
                                <img
                                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=902901&theme=light&t=1740218849292"
                                    alt="KoaCook - All&#0045;in&#0045;one&#0032;powerful&#0032;platform&#0032;to&#0032;manage&#0032;your&#0032;BnB&#0046;&#0032; | Product Hunt"
                                    style={{ width: 'auto', height: '46px' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}

            {/* <!-- Back to top --> */}
            <Link
                href="home"
                id="back-to-top"
                className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-[#3b82f6] text-white leading-9"
            >
                <i className="uil uil-arrow-up"></i>
            </Link>
            {/* <!-- Back to top --> */}
        </>
    );
}
