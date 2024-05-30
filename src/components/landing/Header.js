import React from 'react';

function Header() {
    return (
        <header>
            <nav className="py-6 border-b">
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-between">
                        <a href="#" className="inline-block">
                            <img className="h-8" src="logo.svg" alt="Logo" />
                        </a>
                        <div className="flex items-center justify-end">
                            <div className="hidden md:block">
                                <a href="#" className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
                                    <span className="mr-2">Create site</span>
                                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                                </a>
                            </div>
                            <button className="md:hidden text-teal-900 hover:text-teal-800">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.19995 23.2H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M5.19995 16H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M5.19995 8.79999H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;