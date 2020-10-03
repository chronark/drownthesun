import React, { useState } from "react"

import DropdownButton from "./DropdownButton"
import Hamburger from "./Hamburger"
import NavbarButton from "./NavbarButton"
import { useRouter } from "next/router"

type Props = {
    desktopAlwaysOpen?: boolean
}
const Navbar = (props: Props) => {
    const [desktopOpen, setDesktopOpen] = useState(props.desktopAlwaysOpen || false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const toggleMenu = () => {
        setDesktopOpen(!desktopOpen)
        setMobileOpen(!mobileOpen)
    }

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        setScrolled(window.pageYOffset > 50)
    }

    if (typeof window !== "undefined") {
        scrollY = window.pageYOffset
        window.addEventListener("scroll", handleScroll)
    }

    return (
        <>
            <div
                className={`w-screen h-full bg-carbon-900 inset-0 fixed z-40 transform transition duration-500 ease-in-out sm:hidden ${
                    mobileOpen ? "opacity-75" : "opacity-0"
                } `}
            ></div>
            <div className="fixed z-50 w-full">
                <div
                    className={`bg-carbon-900 left-0 w-screen h-20 fixed transform transition duration-1000 ease-in-out opacity-0 ${
                        scrolled ? "opacity-100" : "-translate-y-full"
                    }`}
                ></div>
                <div className="px-4 py-6 sm:px-6 lg:px-8 md:h-20">
                    <nav className="flex items-center justify-between lg:justify-start">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full sm:w-auto">
                                <a className="sm:hidden" href="#">
                                    <img className="w-auto h-8 sm:h-10" src="/img/logo.png" alt="" />
                                </a>
                                <div
                                    className={`flex items-center -mr-2 ${props.desktopAlwaysOpen ? "sm:hidden" : ""}`}
                                >
                                    <Hamburger onClick={toggleMenu}></Hamburger>
                                </div>
                            </div>
                        </div>
                        <div
                            // menu navbar at the top
                            className={`hidden sm:block transform duration-500 transition ease-in-out opacity-0 md:ml-10 md:pr-4 z-0 ${
                                desktopOpen ? "opacity-100 " : "translate-x-20 lg:-translate-x-20 hidden"
                            }`}
                        >
                            <NavbarButton to="index" name="Home"></NavbarButton>
                            <NavbarButton to="album" name="New Album"></NavbarButton>
                            <NavbarButton to="tour" name="Tour"></NavbarButton>
                            <NavbarButton to="contact" name="Contact"></NavbarButton>
                        </div>
                    </nav>
                </div>
                <div
                    className={`sm:hidden bg-carbon-50 border-1 mx-4 my-2 border-carbon-500 rounded-sm text-center transform transition duration-500 ease-in-out ${
                        mobileOpen ? "opacity-100" : "opacity-0 -translate-y-full"
                    } `}
                >
                    <DropdownButton to="index" name="Home"></DropdownButton>
                    <DropdownButton to="tour" name="Tour"></DropdownButton>
                    <DropdownButton to="contact" name="Contact"></DropdownButton>
                </div>
            </div>
        </>
    )
}

export default Navbar
