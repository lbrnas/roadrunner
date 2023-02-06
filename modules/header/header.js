import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import BurgerNavigation from '../../components/burgerNavigation';
import hamburgerMenu from '../../public/hamburger.svg';
import Link from 'next/link';

const menuItems = ['home', 'travel', 'review', 'about', 'login'];

import { useEffect, useState } from 'react';
const Header = ({ classes, urlImg }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (isClicked) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [isClicked]);

    return (
        <Row className="pr-0">
            <header className="px-5 py-5 relative flex items-center bg-hci-header sm:bg-transparent sm:h-20">
                <main className="max-w-7xl mx-auto flex-grow flex flex-col">
                    <div className="z-10 pt-5 flex text-hci-header font-regular justify-between items-center sm:mb-10 text-xl">
                        <Link href="/">
                            <a className="mt-5">roadrunner</a>
                        </Link>
                        <div className="pb-6 flex items-center md:hidden">
                            <BurgerNavigation
                                menuItems={menuItems}
                                isOpen={isClicked}
                                setIsOpen={setIsClicked}
                            />
                            <div className="w-8" />
                            <img
                                onClick={() => setIsClicked(!isClicked)}
                                className={`h-7 transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-500 ${
                                    isClicked ? 'transform rotate-90' : ''
                                }`}
                                src={'/hamburger.svg'}
                                alt="Menu"
                            />
                        </div>
                        <NavBar menuItems={menuItems} />
                    </div>
                </main>
            </header>
        </Row>
    );
};

export default Header;
